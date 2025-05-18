import Subheading from '@/app/components/Subheading';
import Subsection from '@/app/components/Subsection';
import links from '@/app/collections/links';

export function Home() {
  return (
    <main className="overflow-y-scroll touch min-h-screen px-4 py-4 md:py-24 bg-zinc-100 dark:bg-zinc-900">
      {/* main div */}
      <div className="container max-w-2xl mx-auto flex flex-col items-center text-base text-gray-700 dark:text-gray-300">
        <Subheading className="mb-8 text-xl fade-in tracking-wide">
          <a className="text-gray-700 dark:text-gray-300 font-medium">Dhison P.</a>
          <a className="text-gray-400 dark:text-gray-500 ml-2 font-regular">
            Software Engineer, and more. New York, NY.
          </a>
        </Subheading>
        <div className="text-left gap-y-12 flex-col flex">
          <p className="fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-black dark:text-white font-mono">Simple complexity</span>. The foundational concept
            ingrained in all fields of my work. Ridding the spaces between aesthetics and function.
          </p>
          <p className="fade-in" style={{ animationDelay: '0.2s' }}>
            ✉️
            <a className="italic text-zinc-600 dark:text-zinc-400 ml-2">dhisonp@gmail.com</a>
          </p>
          <Subsection header="Software" emoji="💻" className="fade-in" style={{ animationDelay: '0.4s' }}>
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

          <Subsection header="Music" emoji="🎸" className="fade-in" style={{ animationDelay: '0.6s' }}>
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

          <Subsection header="Photography" emoji="📷" className="fade-in" style={{ animationDelay: '0.8s' }}>
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

          {/* TODO: Replace `'` with `&apos;`, or find a workaround. */}
          {/* TODO: Make this a pretty dropdown! */}
          <Subsection header="Extras" emoji="🏄‍♂️" className="fade-in" style={{ animationDelay: '1s' }}>
            <p className="gapped-paragraph">I enjoy the process of creation.</p>
            <p className="gapped-paragraph">
              If you're here, you're probably curious about my work as a SWE. That should all entailed above. If you
              scrolled this far, well thank you! Here are some bits about me as a human person.
            </p>
            <p className="gapped-paragraph">
              I'd say my biggest motivator in moving around this world is surfing. I try to go to at least one or two
              surf trips per year– this gives me the minimum dose of bliss in my life. Snowboarding comes
              second– nothing comes close to making winter as exciting as it is right now. I run a generous amount, lift
              weights to achieve the physique I'll be satisfied with.
            </p>
            <p className="gapped-paragraph">
              I grew up sorrounded by music. Being a SWE gives me a massive outlet on my logical sound, and sports for my
              twitching-high metabolism and thrill-seeking nature. Music gives me all the real estate to express in both
              the creative and emotional realm. Like software, I try my best to create something that someone will
              appreciate to the highest degree. Excellence is nothing short of minimum, and I'd not dare to sell nor
              brag about anything that is short of such.
            </p>
            <p className="gapped-paragraph">
              And yes, I used to be a photographer. Frankly speaking, I barely do it lately. But how are you not tempted
              to create art when you're presented by a deserving scenery?
            </p>
          </Subsection>
        </div>
      </div>
    </main>
  );
}
