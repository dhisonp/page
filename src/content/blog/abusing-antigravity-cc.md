---
title: 'Abusing Antigravity and Claude Code'
date: '2025/12/12'
category: 'engineering'
slug: 'abusing-antigravity-cc'
---

# Abusing Antigravity and Claude Code

![Antigravity](/images/abusing-antigravity-cc/ag.png)

The other day, I wrote about my first extensive experience using an agentic IDE, like Cursor and
Antigravity. I'd like to dive in more into Antigravity, specifically, when combined with Claude.

I mentioned spec-based development. You converse with Opus 4.5 (ideally Thinking) back and forth so
they know truly what you're looking to build, both from a technical and a high-level design
standpoint. I noted that LLMs know well what LLMs need to convert words (prompt) into an executive
implementation.

## The Editor

Some weeks ago, I wrote about the different editors that I use, ranging from TUI NeoVim/Helix, to
editors such as Zed and VSCode, to full-blown IDEs like PHPStorm or other JetBrains products.

For the most part, I almost never use JetBrains' product unless I need it for work, since most my
other engineers use it. For my own work, almost exclusively I use Helix and Zed, before I started
playing around Antigravity (I'm tired of typing Antigravity, I'm going to call it AG onwards).

AG is essentially Windsurf, which is VSCode fork, which is a Chromium application. It's heavy and
sluggish, but it gets the job done, as everyone and their mums know VSCode. As mentioned in my other
blog post about IDE, VSCode is okay. Same goes for AG.

Where it differs is where Cursor 2.0 chimes along. This Agent Mode that they have is the pride of
the product. Simply, it allows you, the user, to access this interface to run different agents in
parallel on the same codebase. You can achieve an impressive amount of menial to conceptual tasks if
you manage them properly. One agent could be building a prompt for a new big feature, the other
could be fixing UI bugs, the other could analyze performance and stress testing, the other could
write tests, and the final one could improve the responsive layout.

## Purpose

To build prototypes, this thing is absurd. Same goes with Cursor. I made a fully-functioning, fully
mobile-responsive, and for what I think is more than decent code quality,
[ski trip planner](https://snow-bunnies.vercel.app) and a
[dynamic pricing model interface](https://dynamic-pricing-two.vercel.app) under the span of 10 hours
total, max.

![Dynamic Pricing Model](/images/abusing-antigravity-cc/dpm.png)

I finally realize my personal design system, which I call
[Ardent Design](https://ardent-design.vercel.app)– something that I've relied on for many of my
projects, into an agent-readable markdown specification file that any LLM can eat and apply it to
any projects. I can scaffold ideas into functioning applications under minutes to hours, deploy it,
and iterate over it until it surpass the bare minimums of modern MVPs.

## Claude Code

Why Claude Code when you already have the chat interface? Well, for one, I still prefer interacting
with the CLI/TUI. It's snappy and much more stable, and capable. It has more ranges of thinking,
`ultrathink` capability, etc. The planning mode is priceless, and I often direct it to save the
prompt into a project file so AG can easily access it.

But really? Antigravity has a shit ton of free token if you're on Pro. That on top of the $20/mo
Claude plan, you'll be vibe coding for days. No complaints.

## Downsides of Vibe Coding

It's in the name– vibe coding. Shit's fun, but if you want top quality code, you'll have to
meticulously review every single line of code. You'd have to make sure it aligns with your design
standards. For critical code blocks in enterprise codebases, vibe coding isn't the way. But it still
propagates development into levels never seen before.

The bottleneck of development has always been shit breaking and code reviews, not development, so
that still is a thing.

## Implications

Building is just so fast now there is no excuse not to try _any_ stupid idea you have into a
feasible product. All you need is some tidbits of technical knowledge, the willingness to learn and
some fluench in English, which I hope you have if you reached this point.

Does it change what I think about IDEs? No. Helix and Zed remain my go to for manual code editing.
But for building prototype, Cursor/AG has replaced them entirely almost. Claude Code works on
terminals, meaning no matter what IDE you are on, they are accessible. However the interface of AG
and Cursor that allows you to manage multiple agents is isdispensable when the priority is code
generation and feature iteration.

When we talk about code quality? Well... that's still on you to use your beautiful eyes and mind.
