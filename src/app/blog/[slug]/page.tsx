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
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-2xl mx-auto sm:border border-gray-300 dark:border-gray-700 bg-white dark:bg-black p-6">
        {/* Emerald accent bar */}
        <div className="accent-bar mb-6" />

        {/* Back navigation */}
        <div className="section-border-bottom pb-4 mb-6">
          <Link href="/" className="link-item">
            ← back
          </Link>
        </div>

        {/* Article header */}
        <div className="border border-gray-500 dark:border-gray-500 p-6 mb-6">
          <header>
            <h1 className="font-semibold mb-4 leading-[1.2] tracking-[-0.01em] text-3xl font-sans">
              {post.title}
            </h1>

            {/* Metadata table */}
            <div className="blog-post-meta">
              <div className="flex justify-between px-3 py-2 section-border-bottom">
                <span className="metadata">CATEGORY</span>
                <span className="metadata font-medium">{post.category}</span>
              </div>
              <div className="flex justify-between px-3 py-2">
                <span className="metadata">DATE</span>
                <time dateTime={post.date} className="metadata font-medium">
                  {post.date}
                </time>
              </div>
            </div>
          </header>
        </div>

        {/* Article content */}
        <div className="border border-gray-500 dark:border-gray-500 p-6">
          <article className="prose">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>
        </div>
      </div>
      <ScrollToTop />
    </main>
  );
}
