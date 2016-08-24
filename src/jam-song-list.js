
Polymer({

  is: 'jam-song-list',
  properties : {
    hey : { type : String, value : "hello" }
  },
  listeners: {
    // 'tap': 'regularTap',
    // 'special.tap': 'specialTap'
    
  },
  filter_list : function(filter_string) {
    if (!filter_string) {
      return null;
    }
    
    filter_string = filter_string.toLowerCase();
    return function filter_item(item) {
      var text = JSON.stringify(item).toLowerCase();
      return (text.match(filter_string) !== null);
    };
  },
  hello : function() {
    console.log("jam-song-list", this.hey);
  },
  tap_none: function() {
    console.log("select none");
  },
  tap_song: function(event) {
    var song = event.model.item;
    select_song(event.model.item.id, event.model.item.bars);
  },
  ready: function() {
    var jam_song_list = this;
    set_song_list(this);
    $.get('http://localhost:3033/songs', function(data) {
      jam_song_list.song_list = data;
      // var song_items = this.$$('.card.song_item');
      // console.log(song_items.length);
    });
  }
});


