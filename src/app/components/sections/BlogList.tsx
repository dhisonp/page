import Link from 'next/link';
import { Post } from '@/app/lib/blog';

interface BlogListProps {
  posts: Post[];
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <section id="writings" className="max-w-xl" aria-label="Blog posts">
      <h3 className="mb-4">Writings</h3>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="space-y-1">
            <Link href={`/blog/${post.slug}`} className="block hover:opacity-80 transition-opacity">
              <p className="text-gray-700 dark:text-gray-300">{post.title}</p>
              <div className="flex gap-2 text-sm text-gray-500 w-44">
                <span>{post.category}</span>
                <span>-</span>
                <time dateTime={post.date}>{post.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
