import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { getAllPosts, getPostBySlug } from '@/app/lib/blog';
import { ScrollToTop } from '@/app/components/ScrollToTop';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: `${post.category} - ${post.date}`,
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pb-6">
      <div
        className="sticky top-0 py-2 blog-back-row"
        style={{ borderBottom: '1px solid var(--border-light)' }}
      >
        <div className="mx-auto max-w-3xl px-4">
          <Link href="/" className="inline-block link-item">
            &#8637; Back
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 pb-12" style={{ paddingTop: 'var(--space-6)' }}>
        <div
          className="blog-post-meta"
          style={{
            display: 'grid',
            gridTemplateColumns: '120px 1fr',
            gap: 'var(--space-2)',
            padding: 'var(--space-3)',
            marginBottom: 'var(--space-6)',
            fontSize: 'var(--text-sm)',
            fontFamily: 'var(--font-mono)',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          <span style={{ color: 'var(--fg-light)', opacity: 0.8 }}>Category</span>
          <span style={{ color: 'var(--fg-light)', fontWeight: 500 }}>{post.category}</span>
          <span style={{ color: 'var(--fg-light)', opacity: 0.8 }}>Date</span>
          <time dateTime={post.date} style={{ color: 'var(--fg-light)', fontWeight: 500 }}>
            {post.date}
          </time>
        </div>
        <article className="prose">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </div>
      <ScrollToTop />
    </main>
  );
}
