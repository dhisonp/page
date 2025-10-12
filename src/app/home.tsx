import { Subheading } from '@/app/components/Subheading';
import { Subsection } from '@/app/components/Subsection';
import links from '@/app/collections/links';

export function Home() {
  return (
    <main className="overflow-y-scroll min-h-screen px-4 py-4 md:py-24 bg-zinc-100 dark:bg-zinc-900">
      <div className="container max-w-2xl mx-auto flex flex-col items-center text-base text-gray-700 dark:text-gray-300">
        <Subheading className="mb-8 fade-in tracking-wide">
          <span className="text-gray-700 text-2xl dark:text-gray-300 font-medium">Dhison P.</span>
          <span className="text-gray-500 text-lg ml-2 font-regular">Engineering, and more. New York, NY.</span>
        </Subheading>
        <div className="text-left gap-y-12 flex-col flex">
          <p className="fade-in delay-200">
            <span className="text-black dark:text-white italic">Simple complexity</span>. The foundational concept
            ingrained in all fields of my work. Ridding the spaces between aesthetics and function.
          </p>
          <p className="fade-in delay-200">
            ✉️
            <span className="italic text-zinc-600 dark:text-zinc-400 ml-2">dhisonp@gmail.com</span>
          </p>
          <Subsection header="Software" emoji="💻" className="fade-in delay-400">
            <p className="mb-4">Engineering beauty within solutions.</p>
            <ul className="grid md:grid-cols-4 md:grid-rows-none grid-rows-3 gap-y-4">
              <li className="link-item">
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                  linkedin &#8640;
                </a>
              </li>
              <li className="link-item">
                <a href={links.github} target="_blank" rel="noopener noreferrer">
                  github &#8605;
                </a>
              </li>
              <li className="link-item">
                <a href={links.twitter} target="_blank" rel="noopener noreferrer">
                  twitter / x &#8605;
                </a>
              </li>
            </ul>
          </Subsection>

          <Subsection header="Music" emoji="🎸" className="fade-in delay-600">
            <p className="mb-4">A sound connection.</p>
            <ul className="grid md:grid-cols-4 md:grid-rows-none grid-rows-3 gap-y-4">
              <li className="link-item">
                <a href={links.youtube} target="_blank" rel="noopener noreferrer">
                  youtube &#8605;
                </a>
              </li>
              <li className="link-item">
                <a href={links.tiktok} target="_blank" rel="noopener noreferrer">
                  tiktok &#8605;
                </a>
              </li>
            </ul>
          </Subsection>

          <Subsection header="Photography" emoji="📷" className="fade-in delay-800">
            <p className="mb-4">Articulating finest imagery for every moment. </p>
            <ul className="grid md:grid-cols-4 md:grid-rows-none grid-rows-4 gap-y-4">
              <li className="link-item">
                <a href={links.dhisvnco} target="_blank" rel="noopener noreferrer">
                  portfolio &#8605;
                </a>
              </li>
              <li className="link-item">
                <a href={links.dhisvnco + '/prints'} target="_blank" rel="noopener noreferrer">
                  prints &#8605;
                </a>
              </li>
              <li className="link-item">
                <a href={links.behance} target="_blank" rel="noopener noreferrer">
                  behance &#8605;
                </a>
              </li>
              <li className="link-item">
                <a href={links.ig_dhisvn} target="_blank" rel="noopener noreferrer">
                  instagram &#8605;
                </a>
              </li>
            </ul>
          </Subsection>

          <Subsection header="About" emoji="🏄‍♂️" className="fade-in delay-1000">
            <p className="gapped-paragraph">I enjoy the process of creation.</p>
            <p className="gapped-paragraph">Surfing, snowboarding, running, and lifting. Permanent activities.</p>
            <p className="gapped-paragraph">
              Music gave me the start to creation, refinement and performance. Creative.
            </p>
            <p className="gapped-paragraph">
              From Jakarta. Then to Guangzhou, then to Tampa. Now and perhaps forever, based in New York, NY.
            </p>
          </Subsection>
        </div>
      </div>
    </main>
  );
}
