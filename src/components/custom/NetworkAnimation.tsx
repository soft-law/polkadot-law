"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const DESKTOP_NODE_COUNT = 60;
const MOBILE_NODE_COUNT = 30;
const CONNECTION_DISTANCE = 2.8;
const DRIFT_SPEED = 0.0015;
const BOUNDS = { x: 8, y: 4.5, z: 3 };

function NetworkScene({
  nodeCount,
  isDark,
  reduceMotion,
}: {
  nodeCount: number;
  isDark: boolean;
  reduceMotion: boolean;
}) {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(nodeCount * 3);
    for (let i = 0; i < nodeCount; i++) {
      arr[i * 3] = (Math.random() - 0.5) * BOUNDS.x * 2;
      arr[i * 3 + 1] = (Math.random() - 0.5) * BOUNDS.y * 2;
      arr[i * 3 + 2] = (Math.random() - 0.5) * BOUNDS.z * 2;
    }
    return arr;
  }, [nodeCount]);

  const velocities = useMemo(() => {
    const arr = new Float32Array(nodeCount * 3);
    for (let i = 0; i < nodeCount * 3; i++) {
      arr[i] = (Math.random() - 0.5) * DRIFT_SPEED;
    }
    return arr;
  }, [nodeCount]);

  const sizes = useMemo(() => {
    const arr = new Float32Array(nodeCount);
    for (let i = 0; i < nodeCount; i++) {
      arr[i] = 0.03 + Math.random() * 0.06;
    }
    return arr;
  }, [nodeCount]);

  const nodeColor = isDark ? "#E5E7EB" : "#44403C";
  const lineColor = isDark ? "#78716C" : "#D6D3D1";
  const accentColor = isDark ? "#FAFAF9" : "#0F0F0F";

  const maxLineSegments = nodeCount * nodeCount;
  const linePositionsBuffer = useMemo(
    () => new Float32Array(maxLineSegments * 6),
    [maxLineSegments]
  );
  const lineColorsBuffer = useMemo(
    () => new Float32Array(maxLineSegments * 6),
    [maxLineSegments]
  );

  const baseLineColor = useMemo(() => new THREE.Color(lineColor), [lineColor]);
  const accentLineColor = useMemo(
    () => new THREE.Color(accentColor),
    [accentColor]
  );

  useFrame(() => {
    if (!pointsRef.current) return;
    const posArr = pointsRef.current.geometry.attributes.position
      .array as Float32Array;

    if (!reduceMotion) {
      for (let i = 0; i < nodeCount * 3; i++) {
        posArr[i] += velocities[i];
        const axis = i % 3;
        const bound =
          axis === 0 ? BOUNDS.x : axis === 1 ? BOUNDS.y : BOUNDS.z;
        if (Math.abs(posArr[i]) > bound) {
          velocities[i] *= -1;
          posArr[i] = Math.sign(posArr[i]) * bound;
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }

    if (linesRef.current) {
      let lineIndex = 0;
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = posArr[i * 3] - posArr[j * 3];
          const dy = posArr[i * 3 + 1] - posArr[j * 3 + 1];
          const dz = posArr[i * 3 + 2] - posArr[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < CONNECTION_DISTANCE) {
            const offset = lineIndex * 6;
            linePositionsBuffer[offset] = posArr[i * 3];
            linePositionsBuffer[offset + 1] = posArr[i * 3 + 1];
            linePositionsBuffer[offset + 2] = posArr[i * 3 + 2];
            linePositionsBuffer[offset + 3] = posArr[j * 3];
            linePositionsBuffer[offset + 4] = posArr[j * 3 + 1];
            linePositionsBuffer[offset + 5] = posArr[j * 3 + 2];

            const fade = 1 - dist / CONNECTION_DISTANCE;
            const useAccent =
              (i + j) % 17 === 0 && fade > 0.5;
            const color = useAccent ? accentLineColor : baseLineColor;
            const alpha = fade * 0.4;
            lineColorsBuffer[offset] = color.r * alpha;
            lineColorsBuffer[offset + 1] = color.g * alpha;
            lineColorsBuffer[offset + 2] = color.b * alpha;
            lineColorsBuffer[offset + 3] = color.r * alpha;
            lineColorsBuffer[offset + 4] = color.g * alpha;
            lineColorsBuffer[offset + 5] = color.b * alpha;

            lineIndex++;
          }
        }
      }

      const lineGeom = linesRef.current.geometry;
      lineGeom.setAttribute(
        "position",
        new THREE.BufferAttribute(
          linePositionsBuffer.slice(0, lineIndex * 6),
          3
        )
      );
      lineGeom.setAttribute(
        "color",
        new THREE.BufferAttribute(
          lineColorsBuffer.slice(0, lineIndex * 6),
          3
        )
      );
      lineGeom.attributes.position.needsUpdate = true;
      lineGeom.attributes.color.needsUpdate = true;
    }
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-size"
            args={[sizes, 1]}
          />
        </bufferGeometry>
        <pointsMaterial
          color={nodeColor}
          size={0.07}
          sizeAttenuation
          transparent
          opacity={0.7}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial vertexColors transparent opacity={0.6} />
      </lineSegments>

      {/* A few slightly larger accent nodes */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              new Float32Array(
                Array.from({ length: 5 * 3 }, (_, i) =>
                  ((i % 3 === 0
                    ? BOUNDS.x
                    : i % 3 === 1
                    ? BOUNDS.y
                    : BOUNDS.z) *
                    (Math.sin(i * 7.3) * 0.6))
                )
              ),
              3,
            ]}
          />
        </bufferGeometry>
        <pointsMaterial
          color={accentColor}
          size={0.12}
          sizeAttenuation
          transparent
          opacity={0.5}
        />
      </points>
    </>
  );
}

interface NetworkAnimationProps {
  isDark: boolean;
}

export default function NetworkAnimation({ isDark }: NetworkAnimationProps) {
  const [nodeCount, setNodeCount] = useState(DESKTOP_NODE_COUNT);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setNodeCount(
      window.innerWidth < 768 ? MOBILE_NODE_COUNT : DESKTOP_NODE_COUNT
    );

    const handleResize = () => {
      setNodeCount(
        window.innerWidth < 768 ? MOBILE_NODE_COUNT : DESKTOP_NODE_COUNT
      );
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ position: "absolute", inset: 0 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true }}
    >
      <NetworkScene
        nodeCount={nodeCount}
        isDark={isDark}
        reduceMotion={reduceMotion}
      />
    </Canvas>
  );
}
