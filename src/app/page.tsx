import Subheading from "./components/Subheading";
import Subsection from "./components/Subsection";
import "./animations.css";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center bg-zinc-900 xl:px-96 xl:py-24 lg:px-72 lg:py-16 p-4 text-base text-zinc-200">
            {/* <div className="fade-in">TEST ANIMATION</div>
            <div className="fade-in" style={{ animationDelay: "0.1s" }}>
                TEST ANIMATION
            </div> */}
            <Subheading className="mb-8 text-xl fade-in">
                Dhison Padma
            </Subheading>

            <div className="text-left gap-y-12 flex-col flex">
                <p className="fade-in" style={{ animationDelay: "0.2s" }}>
                    <span className="italic font-medium">
                        Simple complexity
                    </span>
                    – a foundational concept ingrained in all fields of work.
                    Ridding the spaces between aesthetics, functionality and
                    merit.
                </p>
                <p>
                    ✉️ <a className="italic text-zinc-500">dhisonp@gmail.com</a>
                </p>
                <Subsection
                    header="🖥️ Software and Tech"
                    className="fade-in"
                    style={{ animationDelay: "0.4s" }}
                >
                    <p className="mb-4">
                        Building refined software and web experiences. Interest
                        in fusing media and technology. Experimenting with novel
                        ideas, searching for functionalities as an answer to
                        problems.
                    </p>
                    <ul className="grid md:grid-cols-4 md:grid-rows-none grid-rows-4 gap-y-4">
                        <li className="link-item">
                            <a href="">projects &#8640;</a>
                        </li>
                        <li className="link-item">
                            <a href="">github &#8605;</a>
                        </li>
                        <li className="link-item">
                            <a href="">experience &#8640;</a>
                        </li>
                        <li className="link-item">
                            <a href="">specialties &#8640;</a>
                        </li>
                    </ul>
                </Subsection>
                <Subsection
                    header="📸 Photography"
                    className="fade-in"
                    style={{ animationDelay: "0.6s" }}
                >
                    <p className="mb-4">
                        Articulating finest imagery for every moment. Aiming to
                        augment the ardent reality into permanance. Holds
                        moments in time, showcasing the beauty in art and
                        people.
                    </p>
                    <ul className="grid md:grid-cols-4 md:grid-rows-none grid-rows-4 gap-y-4">
                        <li className="link-item">
                            <a href="">portfolio &#8605;</a>
                        </li>
                        <li className="link-item">
                            <a href="">prints &#8605;</a>
                        </li>
                        <li className="link-item">
                            <a href="">behance &#8605;</a>
                        </li>
                        <li className="link-item">
                            <a href="">instagram &#8605;</a>
                        </li>
                    </ul>
                </Subsection>
                <Subsection
                    header="🎸 Music"
                    className="fade-in"
                    style={{ animationDelay: "0.8s" }}
                >
                    <p className="mb-4">
                        Perhaps early in age. Going into music school as a child
                        wasn't the most exciting concept– although it might be
                        time to put that into good use. Besides, it's my{" "}
                        <span className="italic font-serif">passion</span>.
                    </p>
                    <ul className="grid md:grid-cols-4 md:grid-rows-none grid-rows-3 gap-y-4">
                        <li className="link-item">
                            <a href="">youtube &#8605;</a>
                        </li>
                        <li className="link-item">
                            <a href="">instagram &#8605;</a>
                        </li>
                        <li className="link-item">
                            <a href="">tiktok &#8605;</a>
                        </li>
                    </ul>
                </Subsection>
                <Subsection
                    header="🏄‍♂️ About me"
                    className="fade-in text-zinc-400"
                    style={{ animationDelay: "1s" }}
                >
                    <p className="gapped-paragraph">
                        Striving to improve– in search of the idealistic
                        lifestyle. I imagine it well.
                    </p>

                    <p className="gapped-paragraph">
                        Let's start talking{" "}
                        <a className="italic font-serif">casual</a>. I like to
                        build stuff, essentially. To make stuff. Maybe it's a
                        website, or music, or just a really sick looking fashion
                        lookbook. I know, not necessarily similar things. But
                        hey as long as I enjoy it?
                    </p>
                    <p className="gapped-paragraph">
                        Other than that, I spend way too much at the gym,
                        swimming pool, and abusing the heavy bag. Checklist says
                        that I'm gonna learn to surf soon– probably the most
                        exciting thing I have in mind right now.
                    </p>
                    <p className="gapped-paragraph">
                        Born in raised in Jakarta, Indonesia. I moved to the
                        United States at the age of 22– March 2020 during the
                        midst of the pandemic. I know, tragic. But here I am,
                        and I'm loving every single second of it. For now, I
                        reside in Tampa. But should be moving to New York City
                        in no time.
                    </p>
                </Subsection>
            </div>
        </main>
    );
}
