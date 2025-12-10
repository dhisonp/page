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
      <div className="sticky top-0 py-2 blog-back-row section-border-bottom">
        <div className="mx-auto max-w-3xl px-4">
          <Link href="/" className="inline-block link-item">
            &#8637; Back
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 pb-12" style={{ paddingTop: 'var(--space-6)' }}>
        <h1 className="text-2xl font-semibold mb-4 leading-[1.3] tracking-[-0.01em] text-black dark:text-white">
          {post.title}
        </h1>
        <div className="blog-post-meta mb-6">
          <div className="flex justify-between px-3 py-2 section-border-bottom">
            <span>Category</span>
            <span className="font-medium">{post.category}</span>
          </div>
          <div className="flex justify-between px-3 py-2">
            <span>Date</span>
            <time dateTime={post.date} className="font-medium">
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
