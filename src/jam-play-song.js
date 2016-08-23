Polymer({
  is: 'jam-play-song',
  properties: {
    song_id : { type: Number, value: 0 },
    song_api : { type: String, value: "http://localhost:3033/songs/" },
    song_body : {}
  },
  play_song : function() {
    console.log("play", this.song_body.title);
  },
  listeners: {
    'tap': 'toggle'
  },
  toggle: function() {
    this.pressed = !this.pressed;
  },
  ready : function() {
    var jam_play_song = this;
    $.get(this.song_api + this.song_id, function(data) {
      jam_play_song.song_body = data;
    });
  }
});


