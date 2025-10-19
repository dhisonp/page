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
    <main className="min-h-screen px-4 py-6 sm:pt-9 lg:pt-12">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="inline-block mb-6 link-item">
          &#8637; Back
        </Link>
        <div className="mb-6 flex gap-2 text-sm blog-meta">
          <span>{post.category}</span>
          <span>-</span>
          <time dateTime={post.date}>{post.date}</time>
        </div>
        <article className="prose">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </div>
      <ScrollToTop />
    </main>
  );
}
