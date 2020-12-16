---
title: Update 20 - Flight Control
author: Alex Anderson
date: 2020-12-15
hero: ../../pages/landing/images/hero.jpg
tags: [update]
excerpt: Progress begins on the flight control station, including a built-in sensor grid, a significant departure from Thorium Classic.
---

I've officially began working on the Flight Control station. After lengthy consideration, I decided to break with tradition and put a small sensor grid on the Flight Control station. This is more in line with other bridge simulators, and gives the Flight Control officer a better idea of where they are navigating, instead of having to rely on the Sensors officer to be their eyes.

![Sensor Grid](images/sensors.gif)

There's a lot going on in this gif, so I'll explain everything.

First, notice the viewscreen in the corner. This is a Picture-in-Picture viewscreen, which can be brought up whenever the crew member wants to see the viewscreen. It can be dragged by the crew member to any of the corners, in case they need to access something underneath it. This is especially helpful for flights over the internet, where streaming the viewscreen is typically poor quality and high latency.

This sensor grid in the center is 3D. The zoom slider makes it possible to zoom all the way from 10 meters to 10,000 kilometers, with circular lines indicating the distance. We can see that the starbase in front of the ship is about 40km away from the crew's ship. In a future newsletter, I'll show you the "tilt" feature, which changes the perspective so the image is looking from an angle, making it possible to see the relative vertical distance of the objects on sensors.

Notice also that the ship itself is rotating, but the sensor grid remains in the same orientation. You can see the starbase moving side to side though. This illustrates how the sensor grid is relative to the orientation of the crews ship, which should make it easier to accurately represent the location of ships in 3D space.

This will also be how the actual Sensors station operates, except its range will be much larger than the Flight Control station's, and they'll have the ability to identify and scan the ships.
