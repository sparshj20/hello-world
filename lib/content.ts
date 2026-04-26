import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "work");

export interface ProjectMeta {
  slug: string;
  title: string;
  summary: string;
  role: string;
  year: number;
  cover: string;
  order: number;
  draft: boolean;
}

export interface Project extends ProjectMeta {
  content: string;
}

export function listProjects(): ProjectMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8");
      const { data } = matter(raw);
      return { slug, ...data } as ProjectMeta;
    })
    .filter((p) => !p.draft)
    .sort((a, b) => a.order - b.order);
}

export function getProject(slug: string): Project | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { slug, content, ...data } as Project;
}

export function getNextProject(slug: string): ProjectMeta | null {
  const all = listProjects();
  const idx = all.findIndex((p) => p.slug === slug);
  if (idx === -1) return null;
  return all[(idx + 1) % all.length];
}
