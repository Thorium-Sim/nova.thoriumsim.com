---
title: Update 13 - New Flights and PID
author: Alex Anderson
date: 2020-10-20
hero: ../../pages/landing/images/hero.jpg
tags: [update]
excerpt: Autopilot and starting a new flight.
---

I started working on the PID (proportion, integral, derivative) control system which will work with the rotation and acceleration of the ship to get it in the desired location. If you want to learn more about PID controllers, check out [this video series](https://www.youtube.com/watch?v=wkfEZmsQqiA&list=PLn8PRpmsu08pQBgjxYFXSsODEF3Jqmm-y). This PID controller is what will allow NPC ships to move around freely, and will give the crew's ship autopilot capabilities.

I also added part of the workflow for creating a new flight. In Thorium Nova, you can have only have one flight running at once, but you can save your flights to come back to them later, which will be useful for long duration missions lasting over several sessions.

I've decided to make it so there are two ways to start a flight. The first is by choosing a Mission, which has everything needed to get the flight going, including what plugins to load and what options the players have for their starting ship.

However, there might be some Flight Directors who want a more custom game that they can orchestrate on their own. For this, they can create a 'Custom Flight', essentially creating a universe that is not constrained by mission objectives. In this case, the Flight Director has to manually choose which plugins to load, spawn the player ship, and manually create whatever objectives they might want for the crew.

Since Thorium Nova missions will have the option of being created in real-time with a "Watch Me Do" button (Thorium Classic has a similar button - it looks like a banana 🍌), the Custom Flight mode will be the starting place for creating new missions.

Of course, everything having to do with mission development is a long ways out. I just needed a way to start a flight so I could do testing on my physics engine in the 3D sandbox, so I've implemented the Custom Flight option really quick.

As a reminder, if you want to get more frequent updates, I post them in the [Thorium Discord server](https://discord.gg/UvxTQZz). When you join, just ask to be given the Nova role, and you'll get access to a set of special channels just for newsletter subscribers.

Finally, last week I asked what theme song you would pick for Thorium Nova, and I got a number of good responses back. Ryan suggested the [Evochron Mercenary Overture](https://www.youtube.com/watch?v=nXEv-5q6dVs); Brent suggested [Mars from Holst's The Planets](https://www.youtube.com/watch?v=L0bcRCCg01I); and AwesomeBenar13 on Discord recommended [Celestial Soda Pop by Ray Lynch](https://www.youtube.com/watch?v=9YtOWeAKTlo). Enjoy!
