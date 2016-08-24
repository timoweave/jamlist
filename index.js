$(function() {

  var parent = window;
  var selected_song_index = 0;
  var selected_song_body = {};
  var selected_song_timeout = undefined;
  var song_list = document.querySelector('jam-song-list');
  var play_song = {};

  console.log("after loading the song list");
  function set_song_list(song_list_object) {
    console.log("set song list");
    if (song_list === undefined) {
      song_list = song_list_object;
    }
    if (song_list !== undefined) {
      song_list.hello();
    } else {
      console.log("song list not there");
    }
  }

  function set_play_song(play_song_object) {
    console.log("play song object");
    if (play_song === undefined) {
      play_song = play_song_object;
    }
    if (play_song !== undefined) {
      play_song.hello();
    } else {
      console.log("play song not there");
    }
  }

  function select_song(index, content) {
    selected_song_index = index;
    selected_song_body = content;
    console.log("select_song", "index", index, "content", content);
  }

  function play_one_song(start_index) {
    start_index = start_index || 0;
    var bars = $('.bar');
    // bars.filter(console.log);
    // bars = bars.filter(function(value, index) { return start_index <= index; });
    console.log("play_one_song", start_index, bars);
    hilite_all_chords(500, bars);
    return;
  }

  function hilite_all_chords(time_stepper, chords) {
    console.log("hilite_all_chords", time_stepper, chords);
    var time_line = time_stepper;
    for (var i = 0; i < chords.length; i++, time_line += time_stepper) {
      hilite_one_chord(time_line, chords[i], i)
    }
  }

  function hilite_one_chord(wakeup_time, chord, i) {
    console.log("hilite_one_chord", i, "in", wakeup_time, "milliseconds", chord.textContent);
    setTimeout(function() {
      var previous_hilitebar = $('.hilitebar');
      previous_hilitebar.removeClass("hilitebar");
      $('#bar-'+i).addClass("hilitebar");
      console.log("hilite_one_chord", i, chord)
    }, wakeup_time);        
  }

  // exports to parent
  parent.select_song = select_song;
  parent.play_one_song = play_one_song;
  parent.set_play_song = set_play_song;
  parent.set_song_list = set_song_list;
})

