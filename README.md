# Jam List 

An app for participanting music hobbists: jamming solo/together from
list of chords, notes, melodies, strumming, keys, pickings, and songs with lyrics.

## Introdution

A responsive mobilve web app, which let a wild variety of music
hobbists to jam songs together; make, edit, and share chords, songs,
melodies, notes, lyrics, and build better music communities.

### priority

1. Build a simple MEAN client/server app (HTML/JS) that list songs to jam.
   (probably use polymer web-component instead of angular)
1. Create a simple Node/Express server.
   (probably use polywer scaffold)
1. Make sure the client/server are sending data between each other.
   startout with json server, and migrate to mongo (mlab if time permit)
1. landing page (song list)
1. setting page (side-menu)
1. song page (chord list along with fret, note, strumming, lyrics, chord)
1. Optional: login page
1. Make sure thanks pass some tests.
1. Optional: Deploy to Heroku.


## Goals

- backend
  - songs server, restful json (json-server, during development, before mlab kick in?)
  - express + (live-server if dev)?
  - json for writing song/music for all level of skill,
    (how to specify chord, fret, lyric, bar, keys, struming, etc.,)
  - heroku (hmmm don't think so for two days time frame)
  
- frontend
  - using polymer web components, 
  - es6, if possible (especially class extends)
  - web components, app (side-menu, main-context, settings, and "bar")
  - * web components for bar (like a music "measure") *, 
    responsive (layout, grid), reconfigable (setting), 

- developement
  - test mocha/chai spec
  - task (grunt.... ?? not likely now)
  - phatoms/selenium/webdriver (not likely???)
