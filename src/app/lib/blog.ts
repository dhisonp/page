import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  content: string;
}

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(contentDirectory);

  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug: data.slug || slug,
        title: data.title,
        date: data.date,
        category: data.category,
        content,
      };
    });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fileNames = fs.readdirSync(contentDirectory);
    const fileName = fileNames.find((fn) => {
      const fullPath = path.join(contentDirectory, fn);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return data.slug === slug || fn.replace(/\.md$/, '') === slug;
    });

    if (!fileName) return null;

    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: data.slug || fileName.replace(/\.md$/, ''),
      title: data.title,
      date: data.date,
      category: data.category,
      content,
    };
  } catch (error) {
    return null;
  }
}
