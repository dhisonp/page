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
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 sm:p-4">
      <div className="max-w-2xl mx-auto sm:border border-gray-400 dark:border-gray-700 bg-white dark:bg-black p-4 shadow-[6px_6px_0_0_rgba(0,0,0,0.08)] dark:shadow-[6px_6px_0_0_rgba(255,255,255,0.06)]">
        {/* Back navigation */}
        <div className="mb-6">
          <Link href="/" className="link-item">
            ← back
          </Link>
        </div>

        {/* Article header */}
        <header className="pb-6 mb-6">
          {/* Title */}
          <h1 className="font-semibold mb-4 leading-[1.2] tracking-[-0.01em] text-3xl font-sans">
            {post.title}
          </h1>

          {/* Metadata - inline, compact */}
          <div className="flex gap-6 font-mono text-xs text-gray-600 dark:text-gray-400">
            <div className="flex gap-2">
              <span className="uppercase">Category:</span>
              <span className="font-medium">{post.category}</span>
            </div>
            <div className="flex gap-2">
              <span className="uppercase">Date:</span>
              <time dateTime={post.date} className="font-medium">
                {post.date}
              </time>
            </div>
          </div>
        </header>

        {/* Article content */}
        <article className="prose">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </div>
      <ScrollToTop />
    </main>
  );
}
