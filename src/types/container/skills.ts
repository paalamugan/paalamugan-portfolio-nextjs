export interface WorkType {
  name: string;
  company: string;
  desc: string;
}

export interface ExperiencesType {
  year: number;
  works: WorkType[];
}
