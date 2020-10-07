---
title: Update 11 - Engines Simulations
author: Alex Anderson
date: 2020-10-06
hero: ../../pages/landing/images/hero.jpg
tags: [update]
excerpt: More work on the underlying simulations
---

I've begun developing the underlying systems which will run the simulation of everything in Thorium Nova. These are functions which run once every frame of the simulation, with a frame usually being 1/60th of a second. These will update the values in the database based on what's going on in the simulation and send those updates to the connected clients.

For example, this week I wrote and tested the system that calculates the acceleration which the Impulse and Warp Engines apply to the ship, and the system which takes the acceleration of those engines and turns it into a velocity, which in turn moves the ship forward.

I haven't done any work to show the ship in the 3D Viewscreen yet, mainly because I can test these systems just fine using my automated testing framework. What I do is create a fake test ship with all the ship systems that I want to test. I then change the values on those ship systems, like setting the Impulse Engines to full impulse. In my test environment, I have the ability to advance the simulation by as many frames as I want, so I advance it a couple of frames, and then see whether my velocity changed appropriately. I can then make the necessary adjustments to my code to make sure it's all working correctly.

When the time comes for me to show ships in the 3D Viewscreen, all of the logic for having the ships fly around will already be tested and working!
