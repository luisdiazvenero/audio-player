$(document).ready(function(){
  getSongs()

})

var audio
var music

function getSongs(){
  $.getJSON("./js/main.json", function(mjson){
    music = mjson
    console.log(music)
  })
}
