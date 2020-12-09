---
title: Update 19 - Flights and Themes
author: Alex Anderson
date: 2020-12-08
hero: ../../pages/landing/images/hero.jpg
tags: [update]
excerpt: Station complement generation, flight assignment, and theme creation
---

This week I made more progress on getting crew stations sorted out. This required a little bit of refactoring of how the server is started and stopped, which should make it easier for Thorium Nova users to access someones server and start playing faster.

I also started planning and building out the station complement system. A station complement is the collection of stations which a ship supports. Most bridge simulators have built-in station complements of 6 stations: Captain, Pilot, Weapons, Engineer, Communications, and Science. As you [saw two weeks ago](/blog/Update-18-Quick-Start-Flights), the Quick Start menu lets you choose your crew and ship. Thorium Nova then automatically generates a station complement for however many crew members you selected based on the systems available on the ship.

So, if you choose a ship that has a stealth field system, then Thorium Nova will make sure one of the stations has the stealth field system. Of course, which station gets it depends on how many stations you chose.

Of course, every station complement will have openings for the Viewscreen and, if you included one in your configuration, a Flight Director. I decided to make it so Flight Directors are assigned directly to on player ship. This makes it much easier to keep track what's going on with an individual ship, and the narrative nature of Thorium Nova lends itself to each player ship having its own Flight Director. Don't worry, though, I'll make it so it's easy to switch the Flight Director controls from one player ship to another. Also notice that the host can choose to assign themselves to a station as well, making it really easy to go from starting the server to playing the game.

Once you get a number of clients connected - that's the individual player computers and browser windows connecting to the host server - you'll see them on the Flight Lobby screen. The names are automatically generated (I personally enjoyed "Starship Folly"), but each client can choose to rename themselves. Assigning clients to a ship and station is as easy as choosing it from the Unassigned list and clicking the 'Assign Client' button next to the station you want it assigned to.

![Flight Assignment](images/flight%20assignment.gif)

In the future, I'll make it so 1) clients remember what ship and station they were assigned to, so they automatically connect and 2) you can create Bridge Configurations that automatically assign clients to specified ships and stations. That second one is intended to be used by permanent bridges.

There will also be a Client Lobby for any clients that have connected to the server but haven't joined. They'll be able to choose their own ship and station, unless the host has disabled that ability.
