---
title: 'About Editors'
date: '2025/10/29'
category: 'Engineering'
slug: 'about-editors'
---

# About Editors

I'm a fan of concise content, so let this one be it. You know what editors are–
there's no need for me to explain it and make an intro like a CNET article. This
list will include all the tools engineers use to edit code, be it lean, simple
editors or a full-scale IDE.

## Visual Studio Code

What everybody and their uncles use. I like it– it's relatively fast, it's
reliable and stable, and the UI is intuitive. Most people will be familiar with
the layout and keymaps. The plugin ecosystem is great. However, you can easily
go too crazy on plugins. A lot of people make the mistake of trying to make the
most out of it by installing big, slow, and hyper-productive plugins, some of
them are paid. But at that point, you may as well, and you should, commit into
an _actual_ IDE.

Overall, there is nothing wrong with going with VSCode as your primary war
weapon. Just know there are better options.

## Zed

My favorite and my main. It's built on Rust with native integration with MacOS
(not sure about Windows), making it extremely, stupid fast. You can code for an
entire day, without lag, and still have 20% remaining.

First of all, it's a marvelous piece of software. Second, it also inherits the
"it just works" factor of VSCode. Third, it encourages minimalism, as a side
effect on there being not as many plugins available, and just how the overall
software was designed. You can tell that the developers intended this editor to
be unbloated, packed with essential features that will allow anyone to create
anything.

It's also aesthetically pleasing. And again, it's really, really, really fast.
Makes work almost enjoyable, really.

Favorite. Best at the moment.

## JetBrains IDEs (WebStorm, PHPStorm, PyCharm, etc.)

They're good. They're a full-blown, full-featured IDE. Let's assume you _have_
the resources to pay for it, otherwise the comparison wouldn't be really fair.
They also work, but they come with the overhead of maintaining proper
configurations to make sure you know what environment you're working on. A
downside of IDE is that it's easy for you to overlook what is going on in your
working environment– from packages, dependencies, binaries, etc. That's more of
an IDE vs text editor argument, so let's not get to deep into that.

As IDEs, they come in with a lot of features that VSCode and Zed lack, at least
with reasonable plugin density. Given proper indexing, you can refactor and
search through files very efficiently and intuitively. Especially for
established frameworks with a lot of 'magic', like Laravel, IDEs can be handy as
changing a lot of these magic points can be a pain in the ass with the more
'manual' text editors. Back to the IDE vs editor point, though, it can be
beneficial to not rely too much on IDE-specific features as a developer.

Cons? They're heavy. They're paid. You can easily rely too much on them. And no
matter how well you set it up or let it index your project, in no way it will be
close to the blazingly fast Zed or Helix, which will come up next.

## Helix

NeoVim on steroids, with a slightly more opinionated keymap. It has a pretty
steep learning curve, very alike vim. Once you master it, though, you really
can't overstate the speed difference when you compare one that has it versus one
that don't.

For one example, there was a time where me and my buddy was working on a same
bug on a project of ours. We decide to tackle it together, and we finally come
across a potential solution. We both got the solution off-screen, and now it's
time to put it into code. We were sitting next to each other on our identical
MacBooks, and I updated maybe 3-4 lines of code spread between ~20 lines under
maybe 4 seconds. It took him more than 12 seconds. He immedeately said to me,
"you wanker, how did you do it so fast?", to which I said, "use Helix mf'er",
and to which he said and I admit defeat, "you nerd ass". Safe to say, he's more
of a Helix geek than I am today.

Anecdotes aside, it does and will make you faster, by nature and design. There
are less physical movements to be made by omitting the need to move your hands
between your mouse and keyboard. There are more features and tools accessible
first-hand and natively within your keyboard surface, without any mouse-clicks,
without any scrolling, all from muscle memory. If you play any musical
instrument, you'll know what it means to be able to create a sound without
thinking. Someone tells you to play Cmaj7, you do it without mathematizing the
four notes that make up for it.

It can however get a little chorey. It's technically an IDE, but it doesn't come
with a lot of the handholding features that IDEs usually sell to you.
Personally, I like it. I like it being minimalistic, and have the speed of a sun
demon. It's not for everyone, but do try it.

Edit: When I say it's hyper-performant, I am not kidding. There is _absolutely
zero delay_ from opening any file, no matter how big, no matter how heavy. It's
hard to convince you from writing. Do try it yourself. Makes VSCode feels like
Adobe Flash Player from 1998 on an Intel Pentium.

## NeoVim

Most of the points written in Helix holds here. I think at this point it's a
matter of preference. Helix is an IDE, but is closer to Zed, as it's a
high-performance, hyper-lightweight, efficient text editor with some essential
features, such as grep, LSP integration and buffer management.

The biggest difference between Helix and NeoVim is setup overhead. Helix comes
in with everything (mostly) setup. If there is any you need to do on your own,
it's quick and non-bothersome. NeoVim on the otherhand requires so much setup to
the point that it's annoying. And like VSCode, you can plugin-creep it to the
point you may as well use an actual IDE. I may get flamed for it, but I do think
so. This amount of customization however is the main reason many uses NeoVim as
their main editor, and it can do things that even full IDEs can't, just due to
the sheer amount of plugins available and the massive community it upholds.

## Conclusion

In the end, these are just tools. I still use each one of them, except VSCode,
because Zed is a direct improvement over it, IMO. The other individual items are
unique in its own way. For example,

- For huge, enterprise Laravel projects, I stick with PHPStorm. Sometimes, you
  just want the best features handed to you on a silver platter without
  thinking. You just want to get it done.
- For long writing session (as opposed to refactoring), I prefer Zed. It's
  lightweight and fast, and I don't need the complex refactoring features that
  IDEs provide. Less details and clutter here is actually a huge reason why I
  pick Zed most of the time.
- For quick, fast refactoring and some writing session, I use Helix. It's built
  in editing features are just that good. You can change so much code in so
  little time, in style too. It just _feels_ good to use it once you are pretty
  good at it.
- For small edits or file views, I use NeoVim. Lightweight, works without
  commitment. In and out.

I can't overstate how much I suggest you try Zed and Helix. Besides, why say no
when given a chance to be a user of well-crafted software anyway?
