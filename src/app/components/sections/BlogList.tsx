import Link from 'next/link';
import { Subsection } from '../Subsection';
import { Post } from '@/app/lib/blog';

interface BlogListProps {
  posts: Post[];
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <Subsection header="Writings" className="max-w-xl" aria-label="Blog posts">
      <ul style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {posts.map((post, index) => (
          <li
            key={post.slug}
            className={`blog-list-item ${
              index !== posts.length - 1 ? 'section-border-bottom' : ''
            }`}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="blog-list-link block transition-colors duration-150"
              style={{
                padding: 'var(--space-3)',
                textDecoration: 'none',
              }}
            >
              <div
                className="blog-list-title font-medium"
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 1.4,
                  marginBottom: 'var(--space-2)',
                }}
              >
                {post.title}
              </div>
              <div
                className="blog-list-meta opacity-80"
                style={{
                  display: 'flex',
                  gap: 'var(--space-2)',
                  fontSize: 'var(--text-xs)',
                  lineHeight: 1.4,
                  fontFamily: 'var(--font-mono)',
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
    </Subsection>
  );
}
