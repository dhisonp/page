import { BlogList } from '../components/sections/BlogList';
import { Intro } from '../components/sections/Intro';
import { Masthead } from '../components/Masthead';
import { getAllPosts } from '../lib/blog';

export function Home() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 sm:p-4">
      <div className="max-w-2xl mx-auto sm:border border-gray-400 dark:border-gray-700 bg-white dark:bg-black p-4">
        <Masthead />
        <div className="accent-bar mb-6" />

        <div className="border border-gray-400 dark:border-gray-600 p-4 mb-6">
          <Intro />
        </div>

        {posts.length > 0 && (
          <div className="border border-gray-400 dark:border-gray-600 p-4">
            <BlogList posts={posts} />
          </div>
        )}
      </div>
    </main>
  );
}
