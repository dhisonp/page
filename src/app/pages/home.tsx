'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Subheading from '@/app/components/Subheading';
import Subsection from '@/app/components/Subsection';

import { BioResponse } from '@/app/types/bio-response';
import { SectionResponse, Section } from '@/app/types/section-response';
import Alert from '@/app/components/elements/Alert';

export function Home(): React.JSX.Element {
  const [bioHtml, setBioHtml] = useState<TrustedHTML>('');
  const [sections, setSections] = useState<Section[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  // const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // TODO: Avoid double fetching– adjust the backend
    const fetchBio = () => {
      axios
        .get('/api/fetch-bio')
        .then(res => {
          const data: BioResponse = res.data;
          setBioHtml(data.html);
        })
        .catch(err => {
          console.error(err);
        });
    };

    const fetchAllSections = () => {
      axios
        .get('/api/sections')
        .then(res => {
          const data: SectionResponse = res.data;
          setSections(data.docs);
        })
        .catch(err => {
          console.error(err);
        });
    };

    fetchAllSections();
    fetchBio();
  }, []);

  // Compute fade-in delay for bio subsection for each section before that
  const bioFadeInDelay = (): string => {
    const baseDelay = 0.4;
    if (!sections) return `${baseDelay}s`;
    return 0.4 + sections.length * 0.2 + 's';
  };

  return (
    <main className="overflow-y-auto touch-auto min-h-screen px-4 py-8 md:py-20 bg-zinc-100 dark:bg-zinc-900">
      {/* Top note */}
      <div className="sm:fixed sm:inset-0 sm:px-2 sm:py-1 text-center sm:text-left mb-8 sm:mb-0">
        <div className="text-gray-600 text-sm">
          Built upon{' '}
          <a href="https://nextjs.org/" target="_blank" className="top-link">
            Next.js{' '}
          </a>
          and{' '}
          <a href="https://nextjs.org/" target="_blank" className="top-link">
            Payload
          </a>
          .
        </div>
      </div>

      <Alert message="Whoops! Something wrong on the backend. Kindly let me know when sh*t goes down and I'll get you coffee:) ☕️" />

      <div className="container max-w-2xl mx-auto flex flex-col items-center text-base text-gray-700 dark:text-gray-300">
        <Subheading className="flex flex-col sm:flex-row mb-8 text-xl fade-in tracking-wide">
          <a className="text-gray-700 dark:text-gray-300 font-medium">Dhison P.</a>
          <p className="text-gray-400 dark:text-gray-500 sm:ml-2 font-regular">
            Software Engineer, Musician. New York, NY.
          </p>
        </Subheading>
        <div className="text-left gap-y-5 sm:gap-y-12 flex-col flex">
          {/* Post-heading */}
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-black dark:text-white font-serif">Simple complexity</span>. The foundational concept
            ingrained in all fields of my work. Ridding the spaces between aesthetics and function.
          </div>
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            ✉️
            <a className="italic text-zinc-600 dark:text-zinc-400 ml-2">dhisonp@gmail.com</a>
          </div>

          {/* Subsections */}
          {sections &&
            sections.map((section, sectionIndex) => {
              // Not sure why baseDelay = 0 fades in correctly, but it works
              const baseDelay = 0;
              const animationDelay: string = baseDelay + sectionIndex * 0.2 + 's';

              return (
                <Subsection
                  key={section.id}
                  header={section.heading}
                  emoji={section.emoji}
                  className="fade-in"
                  style={{ animationDelay: animationDelay }}
                >
                  <div dangerouslySetInnerHTML={{ __html: section.content }} className="space-y-3" />
                  <ul className="custom-ul">
                    {section.links &&
                      section.links.map((link, linkIndex) => (
                        <li key={linkIndex} className="link-item">
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.text} &#8640;
                          </a>
                        </li>
                      ))}
                  </ul>
                </Subsection>
              );
            })}

          {/* Bio Subsection */}
          {bioHtml && (
            <Subsection header="About me" emoji="🏄‍♂️" className="fade-in" style={{ animationDelay: bioFadeInDelay() }}>
              <div dangerouslySetInnerHTML={{ __html: bioHtml }} className="space-y-3" />
            </Subsection>
          )}
        </div>
      </div>
    </main>
  );
}
