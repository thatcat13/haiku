import { Haiku } from './../js/haiku.js';

$(document).ready(function(){
  $('#haiku-form').submit(function(event){
    event.preventDefault();
    const line1input = $('#line1').val();
    const line2input = $('#line2').val();
    const line3input = $('#line3').val();
    const userHaiku = new Haiku(line1input, line2input, line3input);
    userHaiku.countSyllables(userHaiku.line1, userHaiku.line2, userHaiku.line3);

  });//event
});//document ready
