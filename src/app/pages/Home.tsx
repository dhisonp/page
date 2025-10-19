import { BlogList } from '../components/sections/BlogList';
import { Intro } from '../components/sections/Intro';
import { getAllPosts } from '../lib/blog';

export function Home() {
  const posts = getAllPosts();
  const hasPosts = posts.length > 0;

  return (
    <main
      className={`min-h-screen bg-zinc-100 px-4 py-6 sm:pt-9 lg:pt-12 dark:bg-zinc-900 ${
        hasPosts ? '' : 'flex items-center justify-center'
      }`}
    >
      {hasPosts ? (
        <div className="flex flex-col md:flex-row items-start justify-center gap-7 mx-auto max-w-[950px]">
          <div className="w-full md:w-[600px]">
            <Intro />
          </div>
          <div className="w-full md:w-[300px] md:sticky md:top-9 lg:top-12 md:self-start">
            <BlogList posts={posts} />
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </main>
  );
}
