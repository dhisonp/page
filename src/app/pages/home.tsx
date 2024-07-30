'use client';

import Subheading from '@/app/components/Subheading';
import Subsection from '@/app/components/Subsection';

import { BioResponse } from '@/app/types/bio-response';
import links from '@/app/collections/links';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function Home(): React.JSX.Element {
  const [bio, setBio] = useState<BioResponse | null>(null);
  const [bioHtml, setBioHtml] = useState<TrustedHTML>('');

  useEffect(() => {
    const fetchBio = () => {
      axios
        .get('/api/fetch-bio')
        .then(res => {
          const data: BioResponse = res.data;
          setBio(data);
        })
        .catch(err => {
          console.error(err);
        });
    };

    fetchBio();
  }, []);

  useEffect(() => {
    if (bio) {
      setBioHtml(bio.html);
    }
  }, [bio]);

  return (
    <main className="overflow-y-scroll touch min-h-screen px-4 py-4 md:py-24 bg-zinc-100 dark:bg-zinc-900">
      <div className="container max-w-2xl mx-auto flex flex-col items-center text-base text-gray-700 dark:text-gray-300">
        <Subheading className="flex mb-8 text-xl fade-in tracking-wide">
          <a className="text-gray-700 dark:text-gray-300 font-medium">
            Dhison P.
          </a>
          <p className="text-gray-400 dark:text-gray-500 ml-2 font-regular">
            Software Engineer, Musician. New York, NY.
          </p>
        </Subheading>
        <div className="text-left gap-y-12 flex-col flex">
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-black dark:text-white font-serif">
              Simple complexity
            </span>
            . The foundational concept ingrained in all fields of my work.
            Ridding the spaces between aesthetics and function.
          </div>
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            ✉️
            <a className="italic text-zinc-600 dark:text-zinc-400 ml-2">
              dhisonp@gmail.com
            </a>
          </div>
          <Subsection
            header="Software"
            emoji="💻"
            className="fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="mb-4">
              Building refined software and web experiences. Engineering optimal
              solutions. Interest in fusing finance, media and technology.
              Experimenting with novel ideas, searching for functionalities as
              an answer to problems.
            </div>
            <ul className="grid md:grid-cols-4 md:grid-rows-none grid-rows-3 gap-y-4">
              <li className="link-item">
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin &#8640;
                </a>
              </li>
              <li className="link-item">
                <a
                  href={links.notion}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  projects &#8640;
                </a>
              </li>
              <li className="link-item">
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github &#8605;
                </a>
              </li>
              <li className="link-item">
                <a
                  href={links.notion}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  experience &#8640;
                </a>
              </li>
            </ul>
          </Subsection>

          <Subsection
            header="Music"
            emoji="🎸"
            className="fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="mb-4">
              Might as well be the closest thing I have to a{' '}
              <span className="font-serif">passion</span>. Creating, reimagining
              pieces that evokes feeling. Working on a debut release.
            </div>
            <ul className="grid md:grid-cols-4 md:grid-rows-none grid-rows-3 gap-y-4">
              <li className="link-item">
                <a
                  href={links.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tiktok &#8605;
                </a>
              </li>
              <li className="link-item">
                <a
                  href={links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  youtube &#8605;
                </a>
              </li>
              <li className="link-item">
                <a
                  href={links.ig_dhisonp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  instagram &#8605;
                </a>
              </li>
            </ul>
          </Subsection>

          <Subsection
            header="Photography"
            emoji="📷"
            className="fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            <p className="mb-4">
              Articulating finest imagery for every moment. Aiming to augment
              the ardent reality into permanance. Holds moments in time,
              showcasing the beauty in art and people.
            </p>
            <ul className="grid md:grid-cols-4 md:grid-rows-none grid-rows-4 gap-y-4">
              <li className="link-item">
                <a
                  href={links.dhisvnco}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  portfolio &#8605;
                </a>
              </li>
              <li className="link-item">
                <a
                  href={links.dhisvnco + '/prints'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  prints &#8605;
                </a>
              </li>
              <li className="link-item">
                <a
                  href={links.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  behance &#8605;
                </a>
              </li>
              <li className="link-item">
                <a
                  href={links.ig_dhisvn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  instagram &#8605;
                </a>
              </li>
            </ul>
          </Subsection>

          <Subsection
            header="About me"
            emoji="🏄‍♂️"
            className="fade-in"
            style={{ animationDelay: '1s' }}
          >
            <div
              dangerouslySetInnerHTML={{ __html: bioHtml }}
              className="space-y-3"
            />
          </Subsection>
        </div>
      </div>
    </main>
  );
}
