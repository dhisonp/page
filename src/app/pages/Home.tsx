import { BlogList } from '../components/sections/BlogList';
import { Intro } from '../components/sections/Intro';
import { getAllPosts } from '../lib/blog';

export async function Home() {
  const posts = getAllPosts();
  const hasPosts = posts.length > 0;

  return (
    <main
      className={`flex min-h-screen overflow-y-scroll bg-zinc-100 px-4 py-6 sm:pt-9 lg:pt-12 dark:bg-zinc-900 ${
        hasPosts ? 'flex-col md:flex-row items-start justify-center gap-7' : 'items-center justify-center'
      }`}
    >
      <div className={hasPosts ? 'w-full md:w-[600px]' : ''}>
        <Intro />
      </div>
      {hasPosts && (
        <div className="w-full md:w-[300px]">
          <BlogList posts={posts} />
        </div>
      )}
    </main>
  );
}
