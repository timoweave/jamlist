
Polymer({

  is: 'jam-play-list',
  ready: function() {
    var jam_play_list = this;
    $.get('http://localhost:3033/songs', function(data) {
      jam_play_list.play_list = data;
    });

  }
});


