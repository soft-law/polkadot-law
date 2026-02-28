# Polkadot.law

Legal research hub for the Web3 ecosystem, built and funded by the Polkadot DAO ([Referendum #1676](https://polkadot.subsquare.io/referenda/1676)).

Live at **[polkadot.law](https://polkadot.law)**

---

## About

Polkadot.law publishes academic research at the intersection of law and Web3. The first paper — *Polkadot DAO Academic Research: DAO Legal Frameworks and Treasury Proposals Under U.S. and International Law* — is hosted on IPFS and readable directly in the browser.

Research is produced by [soft.law](https://www.soft.law/) and all project rights belong to the Polkadot DAO.

---

## Tech Stack

- **Next.js 15** (App Router, Turbopack)
- **React 19** + TypeScript strict
- **Tailwind CSS v4**
- **Zustand** — dark/light theme state
- **Three.js** via `@react-three/fiber` — animated particle network background
- **react-pdf** — in-browser PDF viewer with virtualized scroll

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## PDF Hosting

Papers are served from IPFS via a dedicated Pinata gateway. The canonical public IPFS URL is also stored in `src/data/papers.ts` for reference.

| Field | URL |
|---|---|
| `pdfUrl` | `https://harlequin-quiet-smelt-978.mypinata.cloud/ipfs/<CID>` |
| `ipfsUrl` | `https://ipfs.io/ipfs/<CID>` |

---

## Project Structure

```
src/
  app/
    page.tsx              # Home — hero + PDF viewer
    layout.tsx            # Root layout, metadata, theme init
    sitemap.ts
  components/custom/
    NavigationBar.tsx     # Logo + theme toggle
    Footer.tsx            # Attribution, links
    PdfViewer.tsx         # Full-featured PDF viewer (zoom, sections, full-page mode)
    PdfViewerWrapper.tsx  # SSR boundary for react-pdf
    HeroBackground.tsx    # Lazy-loaded Three.js wrapper
    NetworkAnimation.tsx  # Particle network (Three.js / r3f)
    ThemeInitializer.tsx  # localStorage + DOM class sync
  data/
    papers.ts             # Paper metadata and IPFS URLs
  store/
    themeStore.ts         # Zustand theme store
```

---

## Contributing

This project is open source. Issues and PRs welcome at [github.com/soft-law/polkadot-law](https://github.com/soft-law/polkadot-law).
