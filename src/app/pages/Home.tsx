import { BlogList } from '../components/sections/BlogList';
import { Intro } from '../components/sections/Intro';
import { Masthead } from '../components/Masthead';
import { getAllPosts } from '../lib/blog';

export function Home() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-2xl mx-auto sm:border border-black dark:border-white bg-white dark:bg-black p-6">
        <div className="accent-bar mb-4" />

        <Masthead />

        <div className="border border-black dark:border-white p-6 mb-6">
          <Intro />
        </div>

        {posts.length > 0 && (
          <div className="border border-black dark:border-white p-6">
            <BlogList posts={posts} />
          </div>
        )}
      </div>
    </main>
  );
}
