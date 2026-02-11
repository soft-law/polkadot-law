interface StructuredDataProps {
  type?: "website" | "organization" | "article";
  page?: "home" | "research" | "pcf";
}

export default function StructuredData({
  type = "website",
  page = "home",
}: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type":
        type === "website"
          ? "WebSite"
          : type === "organization"
          ? "Organization"
          : "Article",
      name: "Polkadot.law",
      url: "https://polkadot.law",
      description:
        "Comprehensive legal resource portal for the Polkadot ecosystem",
      creator: {
        "@type": "Organization",
        name: "soft.law",
        url: "https://www.soft.law/",
      },
      publisher: {
        "@type": "Organization",
        name: "Polkadot Community",
      },
    };

    if (page === "research") {
      return {
        ...baseData,
        "@type": "Article",
        headline: "Academic Research - Polkadot DAO Legal Framework Study",
        description:
          "Treasury-funded academic research on Polkadot DAO structures under U.S. and international law",
        author: {
          "@type": "Organization",
          name: "soft.law",
          url: "https://www.soft.law/",
        },
        funding: {
          "@type": "Grant",
          funder: {
            "@type": "Organization",
            name: "Polkadot Treasury",
          },
          identifier: "Referendum #1676",
        },
      };
    }

    if (page === "pcf") {
      return {
        ...baseData,
        "@type": "Organization",
        name: "Polkadot Community Foundation",
        alternateName: "PCF",
        description:
          "Cayman Islands foundation company serving the Polkadot ecosystem",
        location: [
          { "@type": "Place", name: "Cayman Islands" },
          { "@type": "Place", name: "Hong Kong" },
        ],
      };
    }

    return {
      ...baseData,
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://polkadot.law?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      sameAs: [
        "https://github.com/soft-law/polkadot-law",
        "https://polkadot.network",
      ],
    };
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  );
}
