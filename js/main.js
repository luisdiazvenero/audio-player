$(document).ready(function(){
  initPlayer()
  getSongs()

})

var audio = document.getElementById('player')
var music

function initPlayer(){
  $('#shuffle').click(function(){
    $('#playlist').empty()
    console.log(shuffle(music.songs))
    genList(music)
    playSong(0)
  })
}

function getSongs(){
  $.getJSON("./js/main.json", function(mjson){
    music = mjson
    genList(music)
  })
}

function playSong(id){
  console.log("el id es: " + id)
  var long = music.songs
  if(id>=long.length){
    console.log("se acabo")
    audio.pause()
  } else {
    $('#img-album').attr('src',music.songs[id].image)
    $('#player').attr('src',music.songs[id].song)
    audio.play()
    console.log("hay mas canciones")
    scheduleSong(id)
  }

}

function genList(music){
  $.each(music.songs,function(i,song){
    $('#playlist').append('<li class="list-group-item" id="'+i+'">'+song.nombre+'</li>')
  })
  $('#playlist li').click(function(){
    var selectedsong = $(this).attr('id')
    //console.log(selectedsong)
    playSong(selectedsong)
  })
}


function scheduleSong(id){
  audio.onended = function(){
    console.log("termino la cancion")
    playSong(parseInt(id)+1)

  }
}

function shuffle(array){

  var position = array.length, temp, random

  while(0 !== position){

    random = Math.floor(Math.random() * position)
    position -= 1

    temp = array[position]
    array[position] = array[random]
    array[random] = temp
  }
    return array
}
