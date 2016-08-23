Polymer({
  is: 'jam-setting',
  ready : function() {
    this.show = {
      bar : false, // show the measure or bar index
      staff : false, // the 5-lines staff music sheet 
      chord: false, // the chord diagram
      tab : false, // the 4-strings tab music sheet
      lyrics : false, // words
      strumming_numbering : false, // number, "1 2& &4&"
      strumming_pattern : false, //  up, down, chuk, mute, etc
      misc : false // TBD
    };
  }
});

