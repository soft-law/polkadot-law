export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Polkadot.law",
    url: "https://polkadot.law",
    description:
      "Treasury-funded academic research on DAO legal frameworks, blockchain governance, and international law.",
    creator: {
      "@type": "Organization",
      name: "soft.law",
      url: "https://www.soft.law/",
    },
    publisher: {
      "@type": "Organization",
      name: "Polkadot Community",
    },
    funding: {
      "@type": "Grant",
      funder: {
        "@type": "Organization",
        name: "Polkadot Treasury",
      },
      identifier: "Referendum #1676",
      url: "https://polkadot.subsquare.io/referenda/1676",
    },
    sameAs: [
      "https://github.com/soft-law/polkadot-law",
      "https://x.com/soft_law",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
