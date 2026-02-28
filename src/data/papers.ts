export interface ResearchPaper {
  title: string;
  date: string;
  pdfUrl: string;
  referendumRef?: string;
  referendumUrl?: string;
}

export const papers: ResearchPaper[] = [
  {
    title: "Polkadot DAO Academic Research",
    date: "February 2026",
    pdfUrl: "/papers/Polkadot_DAO_research_softlaw.pdf",
    referendumRef: "Referendum #1676",
    referendumUrl: "https://polkadot.subsquare.io/referenda/1676",
  },
];
