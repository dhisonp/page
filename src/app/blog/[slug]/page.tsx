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
        <h1
          style={{
            fontSize: 'var(--text-2xl)',
            fontWeight: 600,
            marginBottom: 'var(--space-4)',
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
            color: 'var(--fg-light)',
          }}
        >
          {post.title}
        </h1>
        <div className="blog-post-meta" style={{ marginBottom: 'var(--space-6)' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: 'var(--space-2) var(--space-3)',
              borderBottom: '1px solid var(--border-light)',
            }}
          >
            <span>Category</span>
            <span style={{ fontWeight: 500 }}>{post.category}</span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: 'var(--space-2) var(--space-3)',
            }}
          >
            <span>Date</span>
            <time dateTime={post.date} style={{ fontWeight: 500 }}>
              {post.date}
            </time>
          </div>
        </div>
        <article className="prose">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </div>
      <ScrollToTop />
    </main>
  );
}
