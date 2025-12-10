---
title: 'Brutalist, AI Ski Trip Planner Under 5 Hours'
date: '2025/12/10'
category: 'Engineering'
slug: 'snow-bunnies'
---

![Source Code Pro](/images/snow-bunnies/screencap.png)
[https://snow-bunnies.vercel.app](https://snow-bunnies.vercel.app)

I'll try to keep this short, but to pique your interest, this is a fully
functional, reliable software that I will personally use, along with my friends,
for the upcoming ski trips.

## Origins

I was planning 3 skip trips with 3 separate friend groups. First one in
Heavenly, second in Okemo, and third in Hunter. For some reason, nobody really
wants to care about how the snow will be on the selected trip dates. At some
point we're getting closer to the trip, and they're all asking me about the
forecasts, at the same time. So naturally I 'scrambled' different sources to
find information on the weather, drive, accommodation, food, etc., because I
don't have OpenSnow (yeah I know, but I already paid bank for Surfline). All
that for 10+ different heads with different skill levels across two different
disciplines (ski/snowboard).

This was around the time I was introduced to the 'proper' way to vibe code
through several engineer friends of mine. They were crashing my place, and so
their geek spread all over. Antigravity came out weeks earlier, and I have the
Pro plan, so I have plenty of free tokens. So I just decided to open Antigravity
out of boredom and started yelling at the agent.

## The Proper Way

Spec-based prompting is the way if you want proper architecture and design. I
spent at least 15 minutes with Opus 4.5 Thinking to figure out the best
architecture and design guidelines. Once I got the outline file, I simply put it
into the project directory and say "Do it".

The point of Antigravity is their parallel processing. You can have multiple
agents work on multiple domains, on the same codebase, at the same time. So I
did exactly just that. Most of my time is spent reviewing AI code– I'd say 90%,
5% of waiting and 5% texting my friends back home in Jakarta.

What I learned: the code quality depends on your brain, how you translate that
into text, and how you can leverage LLMs to improve the prompt. Who knows LLMs
better than themselves innit?

## Feature Set

I know what I'm trying to build from the start. A minimalistic, reliable and
lightweight ski trip planner and tracker so I can snowboard in peace. I also
know what my friends need: a simple interface, AI insights to save research that
is based on their skill level and sports preference.

All of this is defined in the initial spec file. It's a long file, which is
available for your viewing in the GitHub repository (including other spec files
such as design).

Once you have that set down, each prompt should have that in context. That way,
they hallucinate less and won't get too creative.

## Supervision

In the end, you are a senior or lead engineer with 5+ junior developers that
actually knows how to read documentation and that you severely underpay. But as
your job as a high-level dev, you need to make sure what they shit out is
actually good quality shit. It doesn't need to be perfect– the same principles
you apply to your actual job or any OSS project really.

Each feature branch or commit should be reviewed manually. Lints and formatting
are taken care of by the agent, so all you need to care about is core
correctness, idiomacy, efficiency and manual testing that only a good human eye
can catch. QA, basically.

## Results

You can see it on your own:
[https://snow-bunnies.vercel.app](https://snow-bunnies.vercel.app)

I won't repeat what it does and what's coming since all is laid out in the app.
It's better for you to judge yourself what comes out of the sloppery that was a
combination of Antigravity with Claude Code.

## Evaluation

I was a vibe coding skeptic. I know for a fact AI will change the industry, but
I've for the longest time believed that it won't really change how we work
fundamentally. I know it'll help with speed and accuracy. But this project
shifted my views.

It **does** change how you build fundamentally. Sure, it's skewed towards web
development because ease of setup, build times, compatibility and
domain-awareness (as opposed to, say, Xcode iOS), but it remains the fact that
this way of development is undisputedly the fastest in _code generation_. The
bottleneck are reviews and debugging, but that's always been the case in
traditional development. Just like how modern developers does not need to know
the inner workings of HTML and DOM rendering via frameworks like React and Vue,
at some point it's not _as_ important to over-emphasize the code itself.

But for one to have a good resulting codebase one still need to be a good
engineer. The meaning of a good engineer does not change. You need to have a
good perspective and sensitivity to design, scalability and security.

What changed is the time you waste doing boring shit: centering divs, basic
existing security patterns, etc.

Besides, it's fun!
