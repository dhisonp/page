import links from '@/app/collections/links';
import { Subheading } from '../Subheading';
import { Subsection } from '../Subsection';

export function Intro() {
  return (
    <div className="max-w-2xl flex flex-col items-center">
      <Subheading className="mb-8 fade-in tracking-wide">
        <span className="text-black dark:text-white text-2xl font-bold">Dhison P.</span>
        <span className="text-black dark:text-white text-lg ml-2 font-medium opacity-80">
          Engineering, and more. New York, NY.
        </span>
      </Subheading>
      <div className="text-left gap-y-12 flex-col flex">
        <p className="fade-in delay-200">
          <span className="text-black dark:text-white italic">Simple complexity</span>. The
          foundational concept ingrained in all fields of my work. Ridding the spaces between
          aesthetics and function.
        </p>
        <p className="fade-in delay-200">
          <span className="italic text-black dark:text-white opacity-80">dhisonp@gmail.com</span>
        </p>
        <Subsection header="Software" className="fade-in delay-400">
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

        <Subsection header="Music" className="fade-in delay-600">
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

        <Subsection header="Photography" className="fade-in delay-800">
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

        <Subsection header="About Me" className="fade-in delay-1000">
          <p className="gapped-paragraph">
            I enjoy the process of creation, however form it may be. And surfing. And snowboarding.
            And too many other things, to be honest.
          </p>
        </Subsection>
      </div>
    </div>
  );
}
