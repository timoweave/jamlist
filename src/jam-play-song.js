Polymer({
  is: 'jam-play-song',
  properties: {
    song_id : { type: Number, value: 0 },
    song_api : { type: String, value: "http://localhost:3033/songs/" },
    song_body : {},
    song_all : []
  },
  play_song : function() {
    console.log("play", this.song_body.title);
  },
  listeners: {
    'tap': 'toggle',
    'iron-swipe' : 'swipe_song'
  },
  next_song : function(event) {
      this.song_id += 1;
      if (this.song_id >= this.song_all.length) { this.song_id = 0; }
      this.get_one_song(this.song_id);
  },
  prev_song : function(event) {
      this.song_id -= 1;
      if (this.song_id < 0) { this.song_id = this.song_all.length - 1; }
      this.get_one_song(this.song_id);      
  },
  swipe_song : function(event) {

    if (event.detail.direction === 'left') {
      console.log('hello', 'left');
      this.song_id -= 1;
      if (this.song_id < 0) { this.song_id = this.song_all.length - 1; }
      this.get_one_song(this.song_id);      
    }
    if (event.detail.direction === 'right') {
      console.log('hello', 'right');
      this.song_id += 1;
      if (this.song_id >= this.song_all.length) { this.song_id = 0; }
      this.get_one_song(this.song_id);
    }
  },
  toggle: function() {
    this.pressed = !this.pressed;
  },
  ready : function() {
    console.log("ready");
    this.get_all_song();
    this.get_one_song(this.song_id);
    set_play_song(this);
    return;

    // var pages = Polymer.dom(this.root).querySelector('iron-pages');
    var jam_play_song = this;
    document.addEventListener('click', function(e) {
      // this.pages.selectNext();
      if (jam_play_song.song_id + 1 < jam_play_song.song_all.length) {
        jam_play_song.song_id++;
      } else {
        jam_play_song.song_id = 0;
      }

      jam_play_song.song_body = jam_play_song.song_all[jam_play_song.song_id];
    });

  },
  get_one_song : function(song_id) {
    var jam_play_song = this;
    $.get(this.song_api + song_id, function(data) {
      jam_play_song.song_body = data;
    });
  },
  hello : function() {
    console.log("hello there", this.song_id, this.song_api);
  },
  get_all_song : function() {
    var jam_play_song = this;
    $.get(this.song_api, function(data) {
      jam_play_song.song_all = data;
    });
  },
  attached: function() {
    // console.log("attached", this.song_id, this.song_api, this.song_body);
  },
  next_page: function() {
    
  }
});


