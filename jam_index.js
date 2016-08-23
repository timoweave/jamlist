var app = angular.module("jamApp", []);
app.constant("config", {
  'songs_server': 'http://localhost:3033/'
});
app.factory('songs', ["$http", "config", songs_factory]);
app.controller("jamCtrl", ["$scope", "songs", jam_controller]);

//////////////////////////////////////////

function songs_factory($http, config) {

  var restful_song = config.songs_server + "songs/";

  var get_all_song = function(ok, bad) {
    return $http.get(restful_song).then(ok).catch(bad);
  }

  var get_one_song = function(data, ok, bad) {
    return $http.get(restful_song + data).then(ok).catch(bad);
  }

  var add_one_song = function(data, ok, bad) {
    return $http.post(restful_song, data).then(ok).catch(bad);
  }

  return {
    get_all_song : get_all_song,
    get_one_song : get_one_song,
    add_one_song : add_one_song    
  }
}

function jam_controller($scope, songs) {
  $scope.all_song = [];
  $scope.one_song = {};

  $scope.song = {
    all : [],
    one : {},
    play : undefined
  };

  $scope.one_song = {};

  $scope.play = {
    
  };

  $scope.play_one_song = function() {
    console.log("play one song", $scope.song.one);
    var bars = $('.bar');
    console.log(bars);
    $scope.hilite_all_chords(250, bars);
  };

  $scope.get_all_song = function get_all_song() {
    $scope.song.all = songs.get_all_song(ok, bad);
    function ok(response) {
      console.log("got all songs", response.data);
      $scope.song.all = response.data;
    }
    function bad(error) {
      console.error(error);
    }
  };

  $scope.get_one_song = function get_one_song(song_index) {
    console.log("get_one_song", song_index)
    $scope.song.one = songs.get_one_song(song_index, ok, bad);
    function ok(response) {
      console.log(response.data)
      $scope.song.one = response.data;
      console.log($scope.song.one);
    }
    function bad(error) {
      console.error(error);
    }
  };

  $scope.get_all_song();
  $scope.get_one_song(6);

  $scope.hilite_all_chords = function(time_stepper, chords) {
    console.log(chords);
    var time_line = time_stepper;
    for (var i = 0; i < chords.length; i++, time_line += time_stepper) {
      $scope.hilite_one_chord(time_line, chords[i], i)
    }
  }

  $scope.select_click_song = function(event) {
    var song = $(event.target);
    $scope.song.one = JSON.parse(song.html());
  }

  $scope.hilite_click_bar = function(event) {
    var chord = $(event.target);
    // console.log("hilite_click_bar", event, event.target, chord);

    var hilite_bar = $('.hilitebar');
    hilite_bar.removeClass("hilitebar");
    
    chord.parent().addClass("hilitebar");
  };

  $scope.hilite_one_chord = function(wakeup_time, chord, i) {
    setTimeout(function() {
      var hi_lite_bar = $('.hilitebar');
      hi_lite_bar.removeClass("hilitebar");
      $(chord).addClass("hilitebar");
      console.log(i, chord)
    }, wakeup_time);        
  }

  $scope.play_chords = function(time_stepper, chords) {
    var toplay = function(value) {
      console.log(value);
    };
      
    for (var i = chords.length - 1 ; 0 < i; i--) {
      (function() {
        toplay = (function(toplay, i) {
                  var toplay_i = toplay;
                  var task_i = chords[i];
                  return function(value) {
                    (function(chord) {
                      setTimeout(function() {
                        console.log(chord);
                      }, time_stepper);
                    })(chords[i])
                  }
                })(toplay, i)
      })();
    }
    chords[0](toplay);
  }

}


