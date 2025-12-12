import links from '@/app/collections/links';
import { Subsection } from '../Subsection';
import { LinkList } from '../LinkList';

export function Intro() {
  return (
    <article className="flex flex-col gap-4">
      <p>Design is engineering. Performance is design.</p>

      <Subsection header="Software">
        <p className="mb-3">Art within solutions.</p>
        <LinkList
          links={[
            { label: 'linkedin', href: links.linkedin },
            { label: 'github', href: links.github },
            { label: 'twitter', href: links.twitter },
            { label: 'snowbunnies', href: links.snowbunnies },
            { label: 'dynamic pricing', href: links.dynamic_pricing },
            { label: 'ardent design', href: links.ardent_design },
          ]}
        />
      </Subsection>

      <Subsection header="Music">
        <p className="mb-3">A sound connection.</p>
        <LinkList
          links={[
            { label: 'youtube', href: links.youtube },
            { label: 'tiktok', href: links.tiktok },
          ]}
        />
      </Subsection>

      <Subsection header="Photography">
        <p className="mb-3">Articulating finest imagery for every moment.</p>
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
          I enjoy the process of creation in general– be it music, design, engineering, and even
          human connections. And surfing. And snowboarding. And too many other things, to be honest.
          I sound very hippie but trust me I sound normal in real life. It's for the aesthetics. :)
        </p>
      </Subsection>
    </article>
  );
}
