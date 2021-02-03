---
title: Answers to Sundry Questions
author: Alex Anderson
date: 2021-02-04
hero: ./images/hero.jpg
tags: [essay]
excerpt: Answers to several questions I've received over the past few weeks.
---

## What's the plan for audio?

The goal for audio, like everything in Thorium Nova, is to provide a good enough automated experience for casual players, while still enabling professional Flight Directors the control that they want. I'm going to take this question in three parts: Sound Effects, Music, and Voice Chat.

### Sound Effects

Many ship systems in Thorium Nova will be configurable with sound effects for the different actions, such as jumping to warp or slowing down, firing phasers, or using the transporters. Nova's default plugin will ship with a full suite of sounds that you can use in your own plugins, or you can supply your own. Guidelines for the sound effects will be documented, so you'll know generally what the sound effect should sound like.

By default, sound effects and music will play through the viewscreen, which I figure is the most ideal solution for same-room bridges. For bridges that span over the internet, you can configure your own station to play the ship-wide sound effects.

There are also UI sound effects which play when you click buttons or use the controls on your console. Those will also be configurable via plugins, and will only play on your station. A settings panel will let you control the volume of each of the different channels of audio.

### Music

Thorium Nova will also include a collection of music, arranged by theme or mood. These include "peaceful", "suspenseful", "combat", "mystery" etc. During the mission, Thorium Nova will assume a mood of music based on what is happening during the mission. If the ship is not moving and there are no hostile ships around, it will play peaceful music; travel music will play when the ship is at warp speed. When the mood changes, Thorium Nova will cross-fade between tracks, so the music change isn't jarring. Mission writers can also include cues for Thorium Nova to assume a specific mood during a specific moment of the mission, or play a specific song.

### Voice Chat

One of the great things about building Thorium Nova using web technologies is that I can take advantage of the tools which are used to build real-time chat applications like Google Meet, Zoom, and Discord and build voice chat features right into Thorium Nova. Since Thorium Nova knows which stations are part of the same simulator, it can automatically route voice calls to the correct person. When you hail another player ship with short range communications, the Thorium Nova will automatically route your voice to the other ship's players. And, of course, the Flight Director can take advantage of this system too, with a built-in voice changer that allows the Flight Director to change their voice to assume the roles of the various aliens that the crew comes in contact with.

Of course, none of this will limit the abilities of the Flight Director at all. If the Flight Director wants to control the music themselves, all they have to do is disable the music in Thorium Nova. They can also use Thorium Classic's sound keyboard feature (which I'm thinking of spinning off into it's own small tool) to play their own sound effects, instead of having Thorium Nova automate the sound effects.

## What's the plan with alpha and beta releases?

TL;DR: Expect an alpha no sooner than the beginning of March, but it's much more likely to happen much later than that.

For those unfamiliar with the terms, a beta release is a mostly feature-complete but buggy version of software, while an alpha release is buggy software that is missing most of its features. Since Thorium Nova is so ambitious, it will be a long while before I get close to having a beta release.

As for an alpha release, there definitely are things in the controls that people could play around with and give me feedback. I also want to make sure that I don't solicit feedback too early - alpha testers might be tempted to point out incomplete features, or make suggestions that will distract me from the work that is necessary.

As such, I'm planning on only providing alpha releases to Patreon subscribers ([become a patron here](http://patreon.com/thoriumsim)) at the \$10/month tier. I anticipate those willing to donate will also be understanding and considerate when it comes to the feedback they provide.

There are a lot of things that need to happen before I can release an alpha.

- The Electron Framework wrapper that I'll use to distribute the controls needs to reach version 12 so I can take advantage of the features that are included in that version. That should happen at the beginning of March.
- I need to put together the build pipeline that takes my development code and turns it into a production-ready application.
- I'll really want to include error tracking software in the alpha release, so I'll need to get that integrated.
- I'll need to create some way to distribute the alpha to Patreon subscribers. It might be worth it for me to build out the auto-update functionality at this point as well.

All in all, lots to be done to release an alpha, and that's effort that takes away from feature development, so I need to balance it.

## How will Thorium Nova be distributed?

If you've downloaded and used Thorium Classic, it will be nearly exactly the same as that. Customers will download a program that runs the Thorium Nova server on their own computer, and other players will connect to that computer via the IP address. I'm also planning on releasing a version of Thorium Nova that is designed to be run on cloud infrastructure, for those who want to run a permanent cloud-based Thorium Nova server.

There was some talk of shipping Thorium Nova as a SaaS in the cloud, where everyone connects to a server that I own and control, but I decided that was likely too complicated and expensive to be worth it.

I am planning on creating a cloud-based Thorium Lobby, which will allow Thorium Nova servers to register and be listed publicly. Server owners can optionally apply a password for private games. This will make it easy for players to find their friend's servers over the internet.

## What is the price of Thorium Nova?

While I reserve the right to change this, the current plan is to charge a fixed price per-server (not per-station). That means a server that runs a bridge of 1 to 14 will cost the same amount. In fact, since Thorium Nova will (hopefully) support multi-bridge from a single server, you could run several bridges with a single purchase of Thorium Nova. Its price will be comparative to other bridge simulators, like Artemis ($7 per station) and Starship Horizons ($60 per bridge).

## Will Thorium Nova be open-source?

On the [Thorium Nova landing page](https://nova.thoriumsim.com/#will-thorium-nova-be-open-source-like-thorium-classic), I mention that I'll make Thorium Nova open-source if I reach a certain number of Patreon subscribers. This past week, I've been thinking about doing something a little different - source available. This means I make the source code available to anyone who wants to see it, or even compile it themselves. However, the code is licensed such that you aren't allowed to use it commercially or re-sell the game after you've compiled it. Technically, this is not open-source, since there are restrictions on you can do with the source code. It would, however, allow people to make contributions to the game, as well as modify their own version for personal use.

Obviously, I'm not planning on doing "source available" unless there is a high demand for it, so I would love to hear from you. If I did make the source code of Thorium Nova available with restrictions, would you care? What would you do with it?

## Will Thorium Nova have a single-player mode? What about fighters?

First, the answer this question implies: Yes, I'm planning on making it so Thorium Nova works without a Flight Director. Missions with Flight Directors will likely be more enjoyable, since the Flight Director can tailor the experience to the crew; however, if the crew just wants to fly a mission straight-thru, the system should be automated enough to allow that.

This means a single-player mode should be possible. I just need to figure out how to compress 6 stations worth of controls onto a single station. Should be possible, but I'm not planning on doing that until later in the project, when the multi-station controls are complete.

Single-player mode means that fighters are a short jump away. Adding fighters would be trivial at that point, since any station can immediately assume control of another ship. At that point, you just need a special button on the fighter control screen to return your station to its original controls.

## What is the age limit for Thorium Nova?

I'm hoping that players 10 and up will be able to understand and use the controls. I'm planning on play-testing it with my own nieces and nephews to see if they can grasp the concepts and 3D nature.

However, I'm also planning on adding simplified controls post-release. These would limit 3D movement to a single plane, and simplify other aspects of the controls to make it easier for younger children.

## What are the system requirements for Thorium Nova?

Alas, I don't know the answer to this one yet. Thorium Nova works best with the Chrome web browser, so theoretically any computer that runs the latest version of Chrome will be able to run Thorium Nova. However, depending on your graphics card, some computers might have a better time than others. For example, a Raspberry PI 4 is able to render the viewscreen, but the frame rate is very low at 1080p.

Since I have the good misfortune of developing Thorium Nova on a beefy 16' MacBook Pro, it's hard for me to gauge the lower limits. I'll have a better answer to this in the future, once I've tested it on more computers.

Someday I'll buy myself an iPad Air or iPad Pro and make sure Thorium Nova works on that form factor as well.

As for operating systems, the server itself should work just fine on Windows, Mac, and Linux computers.

---

If you have any other questions, feel free to ask! I'm more than happy to answer them.
