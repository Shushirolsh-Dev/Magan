export type Project = {
  number: string;
  title: string;
  description: string;
  year: string;
  type: string;
  tone: "blue" | "clay" | "green" | "lilac";
  label: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Common Ground",
    description: "A neighbourhood-first identity for a new kind of shared workspace.",
    year: "2025",
    type: "Identity",
    tone: "blue",
    label: "CG",
  },
  {
    number: "02",
    title: "Fieldnotes",
    description: "A quiet digital home for people who would rather make than scroll.",
    year: "2024",
    type: "Digital",
    tone: "clay",
    label: "fn.",
  },
  {
    number: "03",
    title: "Good Measure",
    description: "Making the everyday business of eating well feel a little simpler.",
    year: "2024",
    type: "Product",
    tone: "green",
    label: "GM",
  },
  {
    number: "04",
    title: "Soft Systems",
    description: "An expressive visual language for a small independent software studio.",
    year: "2023",
    type: "Identity",
    tone: "lilac",
    label: "SS",
  },
];

export const filters = ["All", "Identity", "Digital", "Product"] as const;

export const experience = [
  { period: "2023 — Now", role: "Independent designer & developer", place: "Working worldwide" },
  { period: "2021 — 2023", role: "Digital designer", place: "Northstar, London" },
  { period: "2019 — 2021", role: "Design assistant", place: "Studio Practice, Bristol" },
];