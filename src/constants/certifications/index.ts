import hackerRankCertifications from "./hackerRank";
import freeCodeCampCertifications from "./freeCodeCamp";
import googleCloudCertifications from "./googleCloud";
import generalCertifications from "./general";

export const certifications = [
  ...hackerRankCertifications,
  ...freeCodeCampCertifications,
  ...generalCertifications,
  ...googleCloudCertifications,
];

export const certificationTabs = [
  {
    id: "all",
    name: "All",
  },
  {
    id: "hackerRank",
    name: "HackerRank",
  },
  {
    id: "freeCodeCamp",
    name: "FreeCodeCamp",
  },
  {
    id: "googleCloud",
    name: "Google Cloud",
  },
] as const;
