import { BlogList } from '../components/sections/BlogList';
import { Intro } from '../components/sections/Intro';
import { Masthead } from '../components/Masthead';
import { getAllPosts } from '../lib/blog';

export function Home() {
  const posts = getAllPosts();

  return (
    <main
      className="min-h-screen bg-gray-100 dark:bg-gray-900"
      style={{ padding: 'var(--space-6)' }}
    >
      <div
        className="max-w-2xl mx-auto sm:border border-black dark:border-white bg-white dark:bg-black"
        style={{ padding: 'var(--space-6)' }}
      >
        <div className="accent-bar mb-[var(--space-4)]" />

        <Masthead />

        <div
          className="border border-black dark:border-white"
          style={{ padding: 'var(--space-6)', marginBottom: 'var(--space-6)' }}
        >
          <Intro />
        </div>

        {posts.length > 0 && (
          <div
            className="border border-black dark:border-white"
            style={{ padding: 'var(--space-6)' }}
          >
            <BlogList posts={posts} />
          </div>
        )}
      </div>
    </main>
  );
}
