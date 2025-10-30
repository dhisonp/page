---
title: 'About Editors'
date: '2025/10/29'
category: 'Engineering'
slug: 'about-editors'
---

# About Editors

I'm a fan of concise content, so let this one be it. You know what editors are–
no need for explanation. Below is a list of tools engineers use to edit code,
from lean, simple editors to full-scale IDEs.

## Visual Studio Code

What everybody and their uncles use. I like it– it's relatively fast, it's
reliable and stable, and the UI is intuitive. Most people will be familiar with
the layout and keymaps. The plugin ecosystem is great. However, you can easily
go too crazy on plugins. A lot of people make the mistake of trying to make the
most out of it by installing big, slow, and hyper-productive plugins, some of
them are paid. But at that point, you may as well, and you should, commit to an
_actual_ IDE.

Overall, there's nothing wrong with choosing VSCode. Just know there are better
options.

## Zed

My favorite and my main. It's built on Rust with native integration with macOS
(not sure about Windows), making it extremely, stupidly fast. You can code for
an entire day without lag and still have 20% battery remaining.

First of all, it's a marvelous piece of software. Second, it also inherits the
"it just works" factor of VSCode. Third, it encourages minimalism as a side
effect of there being not as many plugins available and just how the overall
software was designed. You can tell that the developers intended this editor to
be unbloated, packed with essential features that will allow anyone to create
anything.

It's also aesthetically pleasing. And again, it's really, really, really fast.
Makes work almost enjoyable, really.

Favorite. Best at the moment.

## JetBrains IDEs (WebStorm, PHPStorm, PyCharm, etc.)

They're a full-featured IDE that works well, assuming you have the resources to
pay for it. The tradeoff is configuration overhead–you need to maintain proper
setups to understand your working environment. It's also easy to overlook what's
happening under the hood: packages, dependencies, binaries, and so on. That
said, this is more of an IDE versus text editor debate, so let's not dwell on
it.

As IDEs, they come with a lot of features that VSCode and Zed lack, at least
with reasonable plugin density. Given proper indexing, you can refactor and
search through files very efficiently and intuitively. Especially for
established frameworks with a lot of 'magic', like Laravel, IDEs can be handy as
changing a lot of these magic points can be a pain with more 'manual' text
editors. Back to the IDE versus editor point, though, it can be beneficial to
not rely too much on IDE-specific features as a developer.

Cons? They're heavy. They're paid. You can easily rely too much on them. And no
matter how well you set it up or let it index your project, in no way will it be
close to the blazingly fast Zed or Helix, which will come up next.

## Helix

NeoVim on steroids, with a slightly more opinionated keymap. It has a pretty
steep learning curve, very similar to Vim. Once you master it, though, you
really can't overstate the speed difference between one that has it versus one
that doesn't.

For example, my buddy and I were working on the same bug and found a potential
solution. We both knew what needed to be done, so we sat down at identical
MacBooks to implement it. I updated 3-4 lines of code across ~20 lines in about
4 seconds. He took more than 12 seconds. He immediately asked, "how did you do
it so fast?", and I said, "use Helix". He's been more of a Helix convert ever
since.

Anecdotes aside, Helix makes you faster by nature anddesign. You eliminate hand
movement between mouse and keyboard, and more features are accessible directly
from your keyboard through muscle memory. If you play an instrument, you know
the feeling: someone calls out a chord and your fingers just do it without
thinking. That's the same principle here.

It can, however, get a little tedious. It's technically an IDE, but it doesn't
come with a lot of the handholding features that IDEs usually sell to you.
Personally, I like it. I like it being minimalistic and having the speed of a
sun demon. It's not for everyone, but do try it.

Edit: When I say it's hyper-performant, I am not kidding. There is _absolutely
zero delay_ when opening any file, no matter how big, no matter how heavy. It's
hard to convince you through writing. Do try it yourself. Makes VSCode feel like
Adobe Flash Player from 1998 on an Intel Pentium.

## NeoVim

Much of what applies to Helix applies here–it comes down to preference. Helix is
closer to Zed: a high-performance, lightweight editor with essential features
like grep, LSP integration, and buffer management.

The main difference is setup overhead. Helix comes mostly pre-configured; any
tweaks are quick and painless. NeoVim requires significant setup, and like
VSCode, you can easily plugin-creep it into a pseudo-IDE. That said, this
flexibility is exactly why many prefer NeoVim–it can do things full IDEs can't,
thanks to its massive plugin ecosystem and community.

## Conclusion

In the end, these are just tools. I still use each one of them, except VSCode,
because Zed is a direct improvement over it, in my opinion. The other items are
unique in their own way. For example:

- For huge, enterprise Laravel projects, I stick with PHPStorm. Sometimes, you
  just want the best features handed to you on a silver platter without
  thinking. You just want to get it done.
- For long writing sessions (as opposed to refactoring), I prefer Zed. It's
  lightweight and fast, and I don't need the complex refactoring features that
  IDEs provide. Less detail and clutter here is actually a huge reason why I
  pick Zed most of the time.
- For quick, fast refactoring and some writing sessions, I use Helix. Its
  built-in editing features are just that good. You can change so much code in
  so little time, in style too. It just _feels_ good to use once you are pretty
  good at it.
- For small edits or file views, I use NeoVim. Lightweight, works without
  commitment. In and out.

I can't overstate how much I suggest you try Zed and Helix. Besides, why say no
when given a chance to be a user of well-crafted software anyway?
