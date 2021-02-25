---
title: Autopilot
author: Alex Anderson
date: 2021-02-11
hero: ./images/hero.jpg
tags: [essay]
excerpt: How will autopilot work in Thorium Nova?
---

[Last week](https://nova.thoriumsim.com/blog/Update-24-Which-way-do-we-go), I mentioned that the crew would be able to activate a full autopilot. I wanted to dive a bit deeper into why this is needed and how it works.

### Why Autopilot is Needed

In short, space is really big. Really really big. That means your direction has to be perfectly precise to not miss your destination. You also have to make a trade between speed and time. Faster speed means shorter travel time; slower speed means longer travel time. It’s basic arithmetic.

Since players would likely prefer to reach their destinations within their lifetimes, the max speeds of both impulse and warp engines are absurdly fast, both within solar systems and in interstellar space. I’ve talked about this at length [in another newsletter](https://nova.thoriumsim.com/blog/Distances-Engines-and-Speeds). However, this tradeoff means that when you are approaching your destination, you need incredibly fast reflexes in order to slow your ship down in time so you don’t crash or completely miss the destination. In fact, with the game engine’s simulation loop of 60 frames per second, or 16ms for each frame, you would travel about 4,700km in a single frame at warp 1! That’s about one-third the diameter of the earth, or the distance from New York to San Francisco. That might not seem like a lot compared to a planet, but suppose your destination is a starbase 25 kilometers long. Now, you are passing your destination 188 times over before you even realized you’ve arrived!

So, we have a bit of a dilemma. Impulse speed is too slow to get anywhere of consequence in a short period of time, and is intended to only be used to visit places around a single planet. To travel from one planet to another, you have to use the absurdly fast Warp engines. However, going that fast makes it easy to pass or crash into your destination. To solve this, we let the computer automatically set our speeds.

#### How Autopilot Works

Autopilot starts with setting a course, as demonstrated last week. The thruster autopilot will automatically maintain the correct direction to the desired destination, and will provide the distance to the destination to the engine autopilot. However, the engine autopilot is activated separately from the thruster autopilot, which gives the crew control over when they start moving.

For both Warp and Impulse Engines, the autopilot will monitor the distance to the destination and choose an appropriate speed that balances travel time and arriving at a safe speed. It will automatically pick the fastest possible speed that will place the crew at their desired destination without overshooting. This means the speed will continually be changing, faster than humanly possible, as the crew approaches their destination.

For impulse engines, the Flight Control officer will choose a desired speed - ¼ Impulse to Emergency Impulse. The autopilot will then accelerate up to that speed, but no faster. This allows the Flight Control officer some control over the speed.

The Warp Engines are significantly more complicated, due to [spooling the Warp Dynamo](https://nova.thoriumsim.com/blog/Distances-Engines-and-Speeds). The autopilot will not have any control over Warp Dynamo spooling. Rather, the crew will be able to choose their warp speed based on how far they spool the Warp Dynamo. The autopilot will indicate the speed it wishes to go, and the Engineer will spool the Warp Dynamo to that level, or any other level below that.

### Keeping It Interesting

Just because the crew doesn’t have to control their engine speed directly doesn’t mean they won’t be occupied. The Warp Engines still need to be spooled, and the Flight Control officer needs to monitor the heat levels of the engines to make sure they don’t overheat. The Flight Control officer will also have tasks to keep the engines running efficiently, which will ensure the engine speed is as high as possible. The Engineer will have to keep track of the fuel and coolant levels, and monitor the Warp Field integrity and Inertial Dampener levels.

In short, everyone involved in making the engines work will still be very much engaged, even though the ship now has an autopilot. In fact, they might be even more engaged in Thorium Nova than in Thorium Classic, where the Flight Director basically served the role of autopilot. Thorium Nova’s autopilot gives the crew that helping hand that the Flight Director usually would extend.
