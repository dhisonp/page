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
            Software Engineer, Musician, Photographer. New York, NY.
          </a>
        </Subheading>
        <div className="text-left gap-y-12 flex-col flex">
          <p className="fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-black dark:text-white font-serif">Simple complexity</span>. The foundational concept
            ingrained in all fields of my work. Ridding the spaces between aesthetics and function.
          </p>
          <p className="fade-in" style={{ animationDelay: '0.2s' }}>
            ✉️
            <a className="italic text-zinc-600 dark:text-zinc-400 ml-2">dhisonp@gmail.com</a>
          </p>
          <Subsection header="Software" emoji="💻" className="fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="mb-4">
              Building refined software and web experiences. Engineering optimal solutions. Interest in fusing finance,
              media and technology. Experimenting with novel ideas, searching for functionalities as an answer to
              problems.
            </p>
            <ul className="grid md:grid-cols-4 md:grid-rows-none grid-rows-3 gap-y-4">
              <li className="link-item">
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                  linkedin &#8640;
                </a>
              </li>
              <li className="link-item">
                <a href={links.notion} target="_blank" rel="noopener noreferrer">
                  projects &#8640;
                </a>
              </li>
              <li className="link-item">
                <a href={links.github} target="_blank" rel="noopener noreferrer">
                  github &#8605;
                </a>
              </li>
              <li className="link-item">
                <a href={links.notion} target="_blank" rel="noopener noreferrer">
                  experience &#8640;
                </a>
              </li>
            </ul>
          </Subsection>

          <Subsection header="Music" emoji="🎸" className="fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="mb-4">
              Might as well be the closest thing I have to a <span className="font-serif">passion</span>. Creating,
              reimagining pieces that evokes feeling. Working on a debut release.
            </p>
            <ul className="grid md:grid-cols-4 md:grid-rows-none grid-rows-3 gap-y-4">
              <li className="link-item">
                <a href={links.tiktok} target="_blank" rel="noopener noreferrer">
                  tiktok &#8605;
                </a>
              </li>
              <li className="link-item">
                <a href={links.youtube} target="_blank" rel="noopener noreferrer">
                  youtube &#8605;
                </a>
              </li>
              <li className="link-item">
                <a href={links.ig_dhisonp} target="_blank" rel="noopener noreferrer">
                  instagram &#8605;
                </a>
              </li>
            </ul>
          </Subsection>

          <Subsection header="Photography" emoji="📷" className="fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="mb-4">
              Articulating finest imagery for every moment. Aiming to augment the ardent reality into permanance. Holds
              moments in time, showcasing the beauty in art and people.
            </p>
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

          <Subsection header="About me" emoji="🏄‍♂️" className="fade-in" style={{ animationDelay: '1s' }}>
            <p className="gapped-paragraph">I enjoy creation. That&apos;s the gist of it.</p>
            <p className="gapped-paragraph">
              I have worked as a professional photographer, I grew up with music and its performative arts, I design and
              engineer modern applications, among the few.
            </p>
            <p className="gapped-paragraph">
              What do I enjoy the most? Frankly, creating good music, or performing, has always been my main form of
              escapism, all the while it has shifted througout the years and inevitably springed back to it. The beauty
              isn&apos;t in the process alone, though, but rather the collective of creative minds that is required to
              create the liveliest forms of art.
            </p>
            <p className="gapped-paragraph">
              I spend way too much at the gym, boxing my thoughts out and abusing the heavy bag. Sometimes I go for Yoga
              when that gets out of hand, but surfing and swimming becomes a priority whenever I am in Los Angeles.
            </p>
          </Subsection>
        </div>
      </div>
    </main>
  );
}
