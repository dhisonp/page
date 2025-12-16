---
title: 'Ensuring Consistent Quality from LLMs'
date: '2025/12/16'
category: 'engineering'
slug: 'ensuring-consistent-quality-from-llms'
---

# Ensuring Consistent Quality from LLMs

Ever felt you read all the fuss about AI changing the engineering landscape, but then you tried
ChatGPT yourself all it shat out was AI slop that only Joe from marketing thought was pretty good?

I was never at that place, but close to it. There's a small window in my career where I tried my
best to leverage LLMs to the fullest. I've seen the vibiest of vibe coders but also the most
intricate of them. I've seen great products built with a small team of engineers that actually knows
how to leverage AI– Cursor, case in point. So within all that time I 'suck' at using AI, I know I
just have to learn.

And learned I did. Thanks to some of my friends that are willing to spend time with me in my new
place on Bleecker St, and while the aim was to get burgers and get shitfaced on Thursday,
inadvertently due to the nature of us being nerds, we started exchanging information on how we
leverage AI both at work and our own personal projects. And by exchanging information, it was me
being genuinely surprised by how they liked Cursor.

## Why, or why not Cursor?

I guess I was blinded by the heavy vibe coders on Twitter and coffee shops absolutely selling the
shit out of Cursor. The finance bros, the digital marketing dude, the girl who just left Meta HR.
And I do respect them for being able to competently get involved in the tech side of things when
they have no formal education for it. It's called 'vibe' coding for a reason– they are vibing with
it!

With that being said, as engineers, we are born to be skeptics. That's our whole job anyway, to be
careful in believing what is optimal and what isn't. But Cursor, in essence, is a VSCode fork (a
really good one in that) that has extensive and productive AI features. This article isn't about
what Cursor is– you can easily find that online. But using Cursor incorrectly will show you the most
obvious results in comparison to using other LLMs incorrectly, because the environment itself
encourages you to prioritize speed over intricacy.

## Inconsistencies

This is a problem not just for Cursor, but for all LLMs. In terms of code, at least, Codex,
Sonnet/Opus, Pro 3. As you've heard multiple times, LLMs are stateless. In essence, they shit out
different doodoo anytime, however they want, based on your input and prompt.

**Based on your input and prompt**.

Inconsistent output is by nature inescapable when dealing with AI. Heck, I'd say that's the whole
point of them, they are meant to be generative, not conclusive. But you can steer them to a certain
direction and nudge them if they do something that displeases you. Yeah, just smack them if they get
naughty (what was that).

And here comes in spec files. I heard people have called them spec-based engineering, or prompting,
but I have no extensive knowledge on that, so it could either be the exact same thing I'm doing or
much more advanced than that (I wrote this on a plane without WiFi, so couldn't do a quick research
for now).

## Love then MDs (the file)

You can begin by referring to
[Claude Code's Best Practices documentation](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview).
Despite how public it is, surprisingly I see so few developers actually make use of their highly
effective system that includes agents, skills, commands, etc. But that is a topic for another day,
and there are heads more qualified to write an article about skills (which apparently is the hot
shit nowadays, I need to catch up, still!).

You all know what `CLAUDE.md`, `GEMINI.md`, `AGENTS.md` or whatever `.md` file there is. In this
article we'll simply call them spec files. I am going to skip what they do because it's better for
you to refer to the docs to know what they actually do, if you haven't known yet.

What I'm getting at is how we utilize multiple, but not excessive– a minimal lineup of spec files
per task or per domain.

## Specifications

I turned [Snow Bunnies](https://snow-bunnies.vercel.app) from an idea into a fully working product
under 5 hours with this method, and it honestly surprised me how effective it is. What I did in
order:

1. Chatted with Opus 4.5 Thinking and outlined what I am looking for. I remember telling it a list
   of features, UI/UX ideal layout, behavior, and a very clear, detailed use case. In this case, I
   told it about my upcoming ski trip.
2. Go back and forth while explicitly correcting assumptions and adding details.
3. Finalize and say "output this into a markdown file for agents to scaffold an initial working
   build".

Once you finish step 3, take a look at how ridiculously big and detailed the new spec file is. It
contains tech stack, architecture, design mockups, common to edge cases, sample user, sample flow,
and all the little tidbits that Opus noted from your previous conversation.

4. Let your local agent, be it Cursor, CC or Pro 3 in Antigravity, eat the spec file. If you are
   rich, let multiple LLM eat it at the same time.
5. Go take a nap, go for a run, call your ex-girlfriend, or in my case, FT'd my friends on the other
   side of the world while I cut onions and make some chicken stew.
6. Run and test the app.

The first iteration is not perfect, but it is stable and working for what I think is the bare
minimum attention I gave for the past active 10 minutes. The UI is not pretty, but everything is
clickable and working, outside of a few mock data that I explicitly told it to not worry about on
initialization.

## Iterations and Improvements

One of the greatest strengths of LLMs with easy stacks such as Next.js is that it can iterate on its
own autonomously without much guidance. Linting, error checks, build tests, etc. But with a little
more nuanced attention, you can add on features really quickly, really fast, really stupidly fast.

See here's where most people, including me, struggle. After the initial build is done, you have two
obvious options: to keep the chat window and maintain context, or create a new one and reduce load
and risk of hallucinations. I don't need to explain why the binary choice isn't optimal, and you
probably have guessed by now what the massive spec files are for.

Here's the kicker, in the initial spec file, ideally it should already contain a checklist or a
roadmap to the MVP and beyond. But you don't want each new chat to digest that absolute behemoth of
markdown file. Instead, what I did was creating one spec file per domain or ticket.

For example, the next step after initialization for me was finalizing the design. I have an existing
[design system](https://ardent-design.vercel.app/) that I was working on, but it wasn't ready. So
what I did was, again, went back to Opus 4.5 Thinking in my browser. Then I describe what my design
system was, and sent two links to websites I liked the look of, and finally say that I absolutely
want a brutalist, utilitarian design.

Guess what? Output that into a spec file, in this case a `DESIGN.md`. Then, I go into Antigravity
and simply say "Execute @DESIGN.md". And never did I expect before seeing results that it would
actually turn out to be ~70% close to what I was envisioning in my mind.

This goes on and on. For each undone feature in the initial spec file that you want to tackle, if
it's a medium+ sized feature, create a lean, simple spec file, and all these files can combine into
a comprehensive source of truth to let any LLM working on your project at the same time achieve to a
somewhat similar vision (somewhat because again, stateless). The design spec file I created are now
mentioned in the global rules file to always be referred to when creating or working on UI
components.

What's the point, you ask? And yes, you don't need multiple spec files if all you wanted is to
center a div or make a button mobile-responsive. You do it for features such as weather prediction,
an extensive UI redesign, a new About page, dark mode implementation, etc. And you do it to keep
track of a more comprehensive knowledge of an otherwise single checklist in the initial spec file,
that you can independently track and nudge to make sure that the feature itself is going to be vibed
into something you envision.

## Results

I am not saying what comes out of this is perfect, but for I'd say a relatively manageable overhead,
albeit minor, you save yourself some token usage and headache from LLMs thinking they are a
breakthrough design engineer.

What's best is that you can do this in parallel with anything– you can write a new spec file while
one agent is working on another, while Opus is crafting another, and while 3-4 other agents are
working on trivial stuff like centering that div (check out how I utilize parallel LLMs
[here](/blog/abusing-antigravity-cc)).

And you can always go back to your project after days of hiatus or just screwing around and have an
easy reference file that both you and the agent can pick up very easily.

That, and you can simply say to your agent: "Add dark mode" "Fix responsive view" "Replace mock data
with API calls" "Begin code review for @src/api/" "Organize commits and push to remote" "Dark mode
is not working on mobile please check" "Responsive on iPad is broken please check" "Please output
code review results to REVIEW.md" And on and on and on.

Then, you can truly vibe while you vibe code!
