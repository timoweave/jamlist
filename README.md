
# Bar List List  \<jamlist\>

An app for hand-on music hobbists: jamming solo/together from
a list of chords, notes, melodies, strumming, keys, pickings, and songs with lyrics.

## Introdution

A responsive mobile web app, which let a wide variety of music
hobbists, especially guitar, ukulele, and mandolin, to jam songs on
your own or with other hobbists together. The app should be easy to
make, edit, and share chords, songs, melodies, notes, lyrics, and
build better music communities. We wanna write, play, and sing songs!

### Priority

- [X] Build a simple MEAN angular client app that talk to json-server and liver-server
- [X] (did angular as backup, use polymer web-component, but not too familiar)
- [x] Make sure the client/server are sending data between each other.
- [x] start out with json server, defined json database, restful api.
- [ ] Create a simple Node/Express server, integrating json-server and live-server(static).
- [x] probably use polymer scaffold 

- [X] landing page (song list)
- [X] setting page (side-menu)
- [X] song page (song detail)
- [X] song detail element, that has fret, note, strumming, lyrics, chord 
- [ ] need to wire/route up the interaction

- [ ] Optional: migrate to mongo (mlab if time permit)
- [ ] Optional: login page (passport if time permit)
- [ ] Optional: Make sure thanks pass some tests.
- [ ] Optional: Deploy to Heroku. 


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

# Run, Test, and Build

```
$ polymer serve # view your application
$ polymer build # build everything
$ polymer serve build/bundled # 
$ polymer test
```

# References

- https://ukebuddy.com/ukulele-chords
