import links from '@/app/collections/links';
import { Subheading } from '../Subheading';
import { Subsection } from '../Subsection';

export function Intro() {
  return (
    <div className="max-w-2xl flex flex-col items-center">
      <Subheading className="mb-[var(--space-6)] fade-in tracking-wide">
        <span
          className="text-black dark:text-white font-bold"
          style={{ fontSize: 'var(--text-2xl)' }}
        >
          Dhison P.
        </span>
        <span
          className="text-black dark:text-white ml-2 font-medium opacity-80"
          style={{ fontSize: 'var(--text-lg)' }}
        >
          Engineering, and more. New York, NY.
        </span>
      </Subheading>
      <div
        className="text-left flex-col flex"
        style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}
      >
        <p
          className="fade-in delay-200"
          style={{ fontSize: 'var(--text-base)', lineHeight: 1.5 }}
        >
          <span className="text-black dark:text-white italic">Simple complexity</span>. The
          foundational concept ingrained in all fields of my work. Ridding the spaces between
          aesthetics and function.
        </p>
        <p
          className="fade-in delay-200"
          style={{ fontSize: 'var(--text-base)', lineHeight: 1.5 }}
        >
          <span className="italic text-black dark:text-white opacity-80">dhisonp@gmail.com</span>
        </p>
        <Subsection header="Software" className="fade-in delay-400">
          <p style={{ marginBottom: 'var(--space-3)', fontSize: 'var(--text-base)', lineHeight: 1.5 }}>
            Engineering beauty within solutions.
          </p>
          <ul
            className="grid md:grid-cols-4 md:grid-rows-none grid-rows-3"
            style={{ gap: 'var(--space-3)' }}
          >
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
          <ul
            className="grid md:grid-cols-4 md:grid-rows-none grid-rows-1"
            style={{ gap: 'var(--space-3)', marginTop: 'var(--space-3)' }}
          >
            <li className="link-item">
              <a href={links.snowbunnies} target="_blank" rel="noopener noreferrer">
                snowbunnies &#8605;
              </a>
            </li>
          </ul>
        </Subsection>

        <Subsection header="Music" className="fade-in delay-600">
          <p style={{ marginBottom: 'var(--space-3)', fontSize: 'var(--text-base)', lineHeight: 1.5 }}>
            A sound connection.
          </p>
          <ul
            className="grid md:grid-cols-4 md:grid-rows-none grid-rows-3"
            style={{ gap: 'var(--space-3)' }}
          >
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
          <p style={{ marginBottom: 'var(--space-3)', fontSize: 'var(--text-base)', lineHeight: 1.5 }}>
            Articulating finest imagery for every moment.{' '}
          </p>
          <ul
            className="grid md:grid-cols-4 md:grid-rows-none grid-rows-4"
            style={{ gap: 'var(--space-3)' }}
          >
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
          <p
            style={{
              marginBottom: 'var(--space-4)',
              fontSize: 'var(--text-base)',
              lineHeight: 1.5,
            }}
          >
            I enjoy the process of creation, however form it may be. And surfing. And snowboarding.
            And too many other things, to be honest.
          </p>
        </Subsection>
      </div>
    </div>
  );
}
