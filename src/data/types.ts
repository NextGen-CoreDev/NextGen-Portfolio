export type ProjectImage = { src: string; caption: string };
export type Metric = { value: string; label: string };
export type Project = {
  slug: string;
  hero: boolean;
  tab: string;
  name: string;
  title: string;
  tagline: string;
  role: string;
  domain: string;
  summary: string;
  highlights: string[];
  metrics: Metric[];
  stack: string[];
  images: ProjectImage[];
  /** Optional CSS object-position for the main Work-card image (default "left top"). */
  focus?: string;
};
export type Service = {
  id: string;
  label: string;
  kicker: string;
  title: string;
  desc: string;
  feats: [string, string][];
  tools: string[];
  done: { project?: string; section?: string; label: string };
};
