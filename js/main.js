$(document).ready(function(){
  getSongs()

})

var audio
var music

function getSongs(){
  $.getJSON("./js/main.json", function(mjson){
    music = mjson
    genList(music)
  })
}

function genList(music){
  $.each(music.songs,function(i,song){
    $('#playlist').append('<li class="list-group-item" id="'+i+'">'+song.nombre+'</li>')
  })
  $('#playlist li').click(function(){
    var selectedsong = $(this).attr('id')
    console.log(selectedsong)
  })
}
