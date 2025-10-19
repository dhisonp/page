import { BlogList } from '../components/sections/BlogList';
import { Intro } from '../components/sections/Intro';

export function Home() {
  return (
    <main className="flex flex-col md:flex-row items-start justify-center min-h-screen gap-7 overflow-y-scroll bg-zinc-100 px-4 py-6 sm:pt-9 lg:pt-12 dark:bg-zinc-900">
      <div className="w-full md:w-[600px]">
        <Intro />
      </div>
      <div className="w-full md:w-[300px]">
        <BlogList />
      </div>
    </main>
  );
}
