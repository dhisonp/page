import { Intro } from '../components/sections/Intro';

export function Home() {
  return (
    <main className="overflow-y-scroll min-h-screen px-4 py-6 sm:pt-9 lg:pt-12  bg-zinc-100 dark:bg-zinc-900">
      <Intro />
    </main>
  );
}
