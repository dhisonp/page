import Link from 'next/link';
import { Post } from '@/app/lib/blog';

interface BlogListProps {
  posts: Post[];
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <section id="writings" className="max-w-xl" aria-label="Blog posts">
      <h3 className="mb-[var(--space-3)]" style={{ fontSize: 'var(--text-lg)' }}>
        Writings
      </h3>

      <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        {posts.map((post) => (
          <li key={post.slug} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
            <Link
              href={`/blog/${post.slug}`}
              className="block hover:opacity-80 transition-opacity"
            >
              <p
                className="text-black dark:text-white"
                style={{ fontSize: 'var(--text-base)', lineHeight: 1.4 }}
              >
                {post.title}
              </p>
              <div
                className="flex gap-2 text-black dark:text-white opacity-80"
                style={{
                  fontSize: 'var(--text-xs)',
                  lineHeight: 1.4,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
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
