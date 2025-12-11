import { BlogList } from '../components/sections/BlogList';
import { Intro } from '../components/sections/Intro';
import { Masthead } from '../components/Masthead';
import { getAllPosts } from '../lib/blog';

export function Home() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 sm:p-4">
      <div className="max-w-2xl mx-auto sm:border border-black dark:border-white bg-white dark:bg-black p-4 shadow-[6px_6px_0_0_rgba(0,0,0,0.08)] dark:shadow-[6px_6px_0_0_rgba(255,255,255,0.06)]">
        <Masthead />
        <div className="accent-bar mb-6" />

        <Intro />

        {posts.length > 0 && <BlogList posts={posts} />}
      </div>
    </main>
  );
}
