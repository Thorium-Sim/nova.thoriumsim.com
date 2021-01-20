---
title: Update 21 - More Flight Control
author: Alex Anderson
date: 2020-12-17
hero: ../../pages/landing/images/hero.jpg
tags: [update]
excerpt: The Flight Control station gets even more updates, with thruster and impulse engine control.
---

![Flight Control](images/flight.gif)

The Flight Control card is mostly complete! I'm sure there will be tweaks later on, but this is how it will likely look.

On the right side is the thruster control, which lets the Pilot change the rotation of the ship or move the ship a little bit laterally. Both of these thruster controls provide 6 degrees of freedom, making it very easy to perform the necessary adjustments.

In the center is the sensor grid, that I demonstrated last week. I changed it so the 3D models appear when you zoom in to a certain level. This makes it easier when navigating very close to other ships, making it possible for you to see the volume that they occupy in space. Notice how the view responds to 3D movements, like roll and pitch - everything is really in 3D!

You can see the "tilt" feature, which makes it so you can see the relative vertical position of objects. Lines are drawn below the objects to the plane that the crew's ship is on to make it easier to see where the objects are. The tilt has two settings: a half-tilt, which is at a 45 degree angle, and a full tilt at 90 degrees. The full tilt is great for setting course, because all you have to do is line the desired destination up with the center of your ship, and you can know that you're pointed in the right direction.

In the future, this sensor grid will have indicators marking waypoints set from the Navigation station. These waypoints will appear as arrows on the edge of the sensor grid until the waypoint is in view. This makes it easy for the Flight Control station to set course to somewhere that is far away.

On the left side is the zoom and tilt controls, as well as boxes showing the current forward velocity, so the crew always knows just how fast they are going, and the target velocity for the Impulse Engines. Impulse Engines are controlled using the slider and buttons underneath. Warp Engine controls will eventually find a home next to the Impulse controls.

I'm continuing to work on the code which controls the movement of ships. I've discovered some bugs that cause the Inertial Dampeners to move the ship far off course, so I'm trying to figure out how to resolve that. Otherwise, I'm quite pleased with how things have turned out so far.
