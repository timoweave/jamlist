var config = require('config');

var song_server = require('json-server')
var song_router = song_server.router('songs.json')
var song_data = song_server.defaults()

var express = require('express');

var server = song_server.create()
 
server.use(song_data)
server.use(song_router)
server.listen(3000, function () {
  console.log('JSON Server is running', server.address())
})