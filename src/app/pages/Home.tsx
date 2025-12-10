import { BlogList } from '../components/sections/BlogList';
import { Intro } from '../components/sections/Intro';
import { getAllPosts } from '../lib/blog';

export function Home() {
  const posts = getAllPosts();
  const hasPosts = posts.length > 0;

  return (
    <main
      className={`min-h-screen ${
        hasPosts ? '' : 'flex items-center justify-center'
      }`}
      style={{
        padding: 'var(--space-4)',
        paddingTop: 'var(--space-6)',
      }}
    >
      {hasPosts ? (
        <div
          className="flex flex-col-reverse md:flex-row items-start justify-center mx-auto max-w-[950px]"
          style={{ gap: 'var(--space-6)' }}
        >
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
