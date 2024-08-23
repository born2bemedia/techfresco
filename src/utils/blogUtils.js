import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export async function getPost(slug, locale) {
  let fileSlug = slug;
  if (locale === "it") {
    fileSlug = `IT-${slug}`;
  } else if (locale === "de") {
    fileSlug = `DE-${slug}`;
  }

  const text = await readFile(`./src/lib/blog/${fileSlug}.md`, "utf8");
  const {
    content,
    data: { title, excerpt, category, seo_title, seo_description, thumbnail },
  } = matter(text);
  const body = marked(content);
  return {
    slug: fileSlug,
    title,
    excerpt,
    category,
    seo_title,
    seo_description,
    thumbnail,
    body,
  };
}

export async function getSlugs() {
  const files = await readdir("./src/lib/blog");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}

export async function getPosts() {
  const slugs = await getSlugs();
  const posts = [];
  for (const slug of slugs) {
    const post = await getPost(slug);
    posts.push(post);
  }
  //posts.sort((a,b) => b.date.localeCompare(a.date));
  return posts;
}

export async function getPage(slug, locale) {
  let fileSlug = slug;
  if (locale === "it") {
    fileSlug = `IT-${slug}`;
  } else if (locale === "de") {
    fileSlug = `DE-${slug}`;
  }

  const text = await readFile(`./src/lib/policies/${fileSlug}.md`, "utf8");
  const {
    content,
    data: { title, date },
  } = matter(text);
  const body = marked(content);
  return { slug: fileSlug, title, date, body };
}

export async function getPageSlugs() {
  const files = await readdir("./src/lib/policies/");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}
