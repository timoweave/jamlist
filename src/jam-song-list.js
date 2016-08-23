
Polymer({

  is: 'jam-song-list',
  ready: function() {
    var jam_song_list = this;
    $.get('http://localhost:3033/songs', function(data) {
      jam_song_list.song_list = data;
    });
  }
});


