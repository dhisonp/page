import links from '@/app/collections/links';
import { Subsection } from '../Subsection';
import { LinkList } from '../LinkList';

export function Intro() {
  return (
    <article style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
      {/* Philosophy quote */}
      <p className="text-lg">
        <span className="italic">"Simple complexity."</span> The foundational concept ingrained in
        all fields of my work. Ridding the spaces between aesthetics and function.
      </p>

      <Subsection header="Software">
        <p style={{ marginBottom: 'var(--space-3)' }}>Engineering beauty within solutions.</p>
        <LinkList
          links={[
            { label: 'linkedin', href: links.linkedin },
            { label: 'github', href: links.github },
            { label: 'twitter', href: links.twitter },
            { label: 'snowbunnies', href: links.snowbunnies },
          ]}
        />
      </Subsection>
      
      <Subsection header="Music">
        <p style={{ marginBottom: 'var(--space-3)' }}>A sound connection.</p>
        <LinkList
          links={[
            { label: 'youtube', href: links.youtube },
            { label: 'tiktok', href: links.tiktok },
          ]}
        />
      </Subsection>

      <Subsection header="Photography">
        <p style={{ marginBottom: 'var(--space-3)' }}>
          Articulating finest imagery for every moment.
        </p>
        <LinkList
          links={[
            { label: 'portfolio', href: links.dhisvnco },
            { label: 'prints', href: links.dhisvnco + '/prints' },
            { label: 'behance', href: links.behance },
            { label: 'instagram', href: links.ig_dhisvn },
          ]}
        />
      </Subsection>

      <Subsection header="About">
        <p>
          I enjoy the process of creation, however form it may be. And surfing. And snowboarding.
          And too many other things, to be honest.
        </p>
      </Subsection>
    </article>
  );
}
