import Subheading from "@/app/components/Subheading";
import Subsection from "@/app/components/Subsection";
import links from "@/app/collections/links";

export function Home() {
  return (
    <main className="overflow-y-scroll touch min-h-screen flex flex-col items-center bg-zinc-900 xl:px-96 xl:py-24 lg:px-72 lg:py-16 p-4 text-base text-zinc-200">
      <Subheading className="mb-8 text-xl fade-in">Dhison Padma</Subheading>
      <div className="text-left gap-y-12 flex-col flex">
        <p className="fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="italic font-medium">Simple complexity</span>– a
          foundational concept ingrained in all fields of work. Ridding the
          spaces between aesthetics, functionality and merit.
        </p>
        <p className="fade-in" style={{ animationDelay: "0.2s" }}>
          ✉️ <a className="italic text-zinc-500">dhisonp@gmail.com</a>
        </p>
        <Subsection
          header="🖥️ Software"
          className="fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <p className="mb-4">
            Building refined software and web experiences. Engineering optimal
            solutions. Interest in fusing finance, media and technology.
            Experimenting with novel ideas, searching for functionalities as an
            answer to problems.
          </p>
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
        <Subsection
          header="📸 Photography"
          className="fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="mb-4">
            Articulating finest imagery for every moment. Aiming to augment the
            ardent reality into permanance. Holds moments in time, showcasing
            the beauty in art and people.
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
                href={links.dhisvnco + "/prints"}
                target="_blank"
                rel="noopener noreferrer"
              >
                prints &#8605;
              </a>
            </li>
            <li className="link-item">
              <a href={links.behance} target="_blank" rel="noopener noreferrer">
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
          header="🎸 Music"
          className="fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <p className="mb-4">
            Might as well be the closest thing I have to a{" "}
            <span className="italic font-serif">passion</span>. Creating,
            reimagining pieces that evokes feeling.
          </p>
          <ul className="grid md:grid-cols-4 md:grid-rows-none grid-rows-3 gap-y-4">
            <li className="link-item">
              <a href={links.youtube} target="_blank" rel="noopener noreferrer">
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
            <li className="link-item">
              <a href={links.tiktok} target="_blank" rel="noopener noreferrer">
                tiktok &#8605;
              </a>
            </li>
          </ul>
        </Subsection>
        <Subsection
          header="🏄‍♂️ About me"
          className="fade-in text-zinc-400"
          style={{ animationDelay: "1s" }}
        >
          <p className="gapped-paragraph">
            Striving to improve– in search of the idealistic growth and
            lifestyle.
          </p>
          <p className="gapped-paragraph">
            Let&apos;s start talking <a className="italic font-serif">casual</a>
            . I like to build stuff, essentially. To make stuff. Maybe it&apos;s
            a website, or music, or just a really sick looking fashion lookbook.
            I know, not remotely related things. But hey as long as I enjoy it,
            right?
          </p>
          <p className="gapped-paragraph">
            Other than that, I spend way too much at the gym, swimming pool, and
            abusing the heavy bag. Ticked my most recent checklist to learn to
            surf– probably the most exciting thing I have in mind right now.
          </p>
        </Subsection>
      </div>
    </main>
  );
}
