---
title: The Flight Director Star Map
author: Alex Anderson
date: 2020-11-11
hero: ./images/hero.jpg
tags: [essay]
excerpt: Flight Directors should have a seamless, intuitive experience as they orchestrate ship movements through their star map core.
---

These past few weeks, I’ve been working on the core screen for the Flight Director. This is the screen that will give the Flight Director at-a-glance information about what is happening in space. Since this is what the Flight Director spends most of their time looking at and working with, it needs to be fast, responsive, helpful, and intuitive.

In last week’s newsletter, I included this screenshot of my task management tool which shows all the features I’m planning on implementing in the Star Map core. In today’s essay, I’m going to explain the features and my thinking around them. I’m also going to talk about the constraints Flight Directors will have to work around.

### Star Map Viewer

It should be really easy for the Flight Director to navigate space. That means seeing important data at a glance while omitting unessential information, and performing actions with as little effort as possible.

The Interstellar map will be a 3D representation of the solar systems in space, very similar to the Interstellar Star Map editor. The Flight Director should be able to see the location of any of the player ships. This will mostly be so the Flight Director can navigate around interstellar space, but they won't be able to create new planetary systems once the flight starts. I don’t know if NPC ships will be visible on the Interstellar map yet or not, since that might give a lot of unnecessary information.

Not much happens in Interstellar space, anyway. When traveling at Warp Speed, the ship is moving too fast to be able to engage in combat or interact with other ships. If a ship were to stop in the middle of Interstellar space, then they could interact with the nothingness that exists in that place. In that case, Flight Directors could spawn ships as needed, such as friendly merchants to visit the crew in deep space.

Most of the action in missions happens within a solar system. The solar system view will be top-down, looking from above the orbital plane. The Flight Director will be able to zoom in and out with the mouse wheel or a zoom slider in the corner, with the ability to zoom from 500 meters up to 30000000000 kilometers (which lets the Flight Director see the entire solar system).

As with Interstellar space, the Flight Director won't be able to create new planets or stars in the middle of a flight.

Ships, planets, stars, and other objects are represented as icons. Zooming in close changes the icon into the visible representation of the object as it appears on the viewscreen, including the correct orientation. Of course, this view is updated in real-time to show the movement of the objects in space.

The Flight Director can click to select individual ships or objects, or drag-select to select multiple ships at the same time. If a single ship is selected, they can choose to track that ship, which will have the camera follow the movement of the ship in space. There will also be buttons to quickly select one of the player ships.

Representing 3D space on a 2D screen is difficult, and will always have challenges. Since the camera can’t see behind planets, it’s possible a crew could choose to hide their ship behind a planet. An option will be available to hide any interstellar objects, like stars and planets, so the Flight Director can see any ships that are hiding.

Also, since we are looking into a 3D world, the Flight Director sees through the lens of a virtual camera that can move around space. Since ships can fly in any direction in space, they could move behind the camera. What happens then? The Flight Director will have a “Flatten” button which temporarily places all of the objects on the same horizontal plane. That means there will be no way to see whether one ship is above another in space, but at very least all of the ships will be visible to the camera, regardless of their vertical position.

Finally, there will be a distance measuring tool which makes it possible to see how far a ship is from another object or point in space.

### Creating Ships

Creating, or spawning, ships will happen through both manual and automatic processes. Certain solar systems can be configured to randomly spawn ships based on the number of ships currently in the system, the faction which owns the system, and random chance. This feature will likely not be added till much later in the development process, but it should add a nice level of realism to the experience.

As an example, a Human-controlled settlement near the border of Pirate space might occasionally have a Pirate fighter zoom in and start taking potshots at the cargo ships passing through. This could lead to some impromptu skirmishes which the crew can either choose to get involved in or avoid.

When a Flight Director right-clicks on the star map, it will give them the option to spawn a ship at that point. That ship will be based on an existing ship template, but a few aspects of it will be configurable when it is spawned, like its name, crew population, how much damage it has sustained, and what faction it belongs to.

You might be asking “Hang on, if the star map is 3D, how does it know where to put the ship on the Y, or vertical, dimension?” There will be a box where the Flight Director can enter the current Y position. Any new ships or ship orders will use that number as their Y location. There will also be buttons which quickly reset it to 0, or set it to the Y position of the currently selected ship.

If the Flight Director doesn’t care as much about where the new ship is created, they can choose to spawn a new ship at a random location some distance away from the currently selected ship. This makes it easy to quickly generate a fleet of hostile ships - just select the player ship, quickly configure the spawn tool to generate a pirate ship, and spawn several just outside of sensor range. Then select them all and order them to move in.

Of course, Flight Directors will also be able to remove a ship from the Star Map, or make it explode (which shows visibly on the viewscreen).

The Flight Director will also be able to create waypoints for individual player ships that the crew can use to orient themselves and know where they need to travel. These waypoints will most likely be created as part of a mission timeline, but the option for Flight Directors to create them ad-hoc will be available.

### Ordering Ships

If you’ve ever played a Real Time Strategy (RTS) game like StarCraft or Age of Empires, ordering ships around on the Flight Director screen will be a very similar experience. Once you’ve selected at least one contact, you’ll be able to give it orders by right-clicking. Right-click on an empty area of space and it will move to that point; right-clicking on another ship will give the option to either follow or target that ship with their weapons. A speed slider will give the ship a guideline of how fast or slow it should move to its destination. Remember, though - if a destination can only reasonably be reached using Warp Engines, the ship isn’t going to use Impulse the whole way.

When multiple ships are selected, it will be assumed that they are part of the same fleet, so giving orders to them will have them fly in formation. The ship closest to the destination will be considered the ‘leader’, and the rest of the contacts will fall in line around that ship.

More nuanced orders, such as patrolling, fleeing, or attacking can be given by selecting them from a side menu.

Most of the time, NPCs will be fully automated with behaviors. They’ll be aware of what is happening in their immediate vicinity and will react accordingly. Most of the time they’ll travel from planet to planet, or fly patrols. However, if they feel threatened by the presence of pirates or an unexpected phaser blast, they’ll react. Ships that are armed might engage whatever seems dangerous to them; unarmed ships will run away.

My hope is that I can give Flight Directors the tools necessary to program behaviors before a flight. They might be able to represent a repair ship with a behavior like “Target weapons the nearest unvisited defense satellite object. Travel there at cruising speed. Wait for 3 minutes. Mark the target as visited. Repeat.”

As an aside, I think it’s possible this could turn into a separate station for one of the crew members. A Fleet Coordinator officer would be able to see all of the other ships in their fleet and give orders to them as part of a coordinated mission. Stay tuned!

### Modifying Ships

NPC ships will behave very similarly to the crew’s ships. In fact, with few exceptions, all of the systems and simulations which apply to the crew ship apply to NPCs. If an NPC ship has damaged thrusters, they won’t be able to travel anywhere. If they run their impulse engines too hot, then the efficiency of those engines will decrease. All of this information will be queryable by the crew’s Sensors officer.

For the Flight Director, having this much information about every single ship is a little overwhelming. That’s why the Flight Director will get a much narrower view into specific aspects of an NPC ship. They’ll be able to see whether its weapons are engaged or not, what its current course is, and how much fuel it has. They can modify the shield strength, hull level, and behavior. They can order a ship to go somewhere, attack another ship, hail the crew ship, or perform a scan.

Outside of that, Flight Directors are going to have to trust that Thorium Nova’s AI will take the orders and behaviors which the Flight Director assigns and apply them to the NPCs properly. When a ship feels threatened, it will automatically raise its shields. Pirates will automatically know to attack other ships. Ships will avoid crashing into each other.

There will be some special statuses which the Flight Director can assign, such as “hostile”, “invincible”, “decrease damage taken”, and “increase weapons strength”. These let the Flight Director override some things which might disrupt the storytelling aspect.

Also, Flight Directors will have the ability to directly position and orient ships. This will be discouraged, however, because having a ship jump from one place to another instantly would be jarring to watch on the viewscreen.

### Other Stuff

I've gotten some great ideas from you newsletter subscribers. One of them has to do with environmental effects that cover a volume of space. These can be created inside of solar systems and add another layer of depth to what the crew experiences. These will include asteroid fields and nebulas, which will auto-generate based on the volume that was created. There will also be areas of "invisible effects" such as an area of exceptionally high radiation, an area that inhibits warp travel, or an area that veils their sensors so they can only see outside their viewscreen.
