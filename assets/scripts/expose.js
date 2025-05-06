// expose.js
window.addEventListener('DOMContentLoaded', init);

let currentHorn = ""
let imgPath = ""
let audioPath = ""
let soundLevel = 50


function init() {
  // TODO
  const audio = document.querySelector("audio")

  const playSoundButton = document.querySelector("button")
  playSoundButton.addEventListener("click", (event) => playSound(event, audio))
  
  const changeHornList = document.getElementById("horn-select")
  changeHornList.addEventListener("change", (event) => changeHorn(event, audio))

  const soundBar = document.getElementById("volume")
  soundBar.addEventListener("input", (event) => changeSoundLevel(event, audio))
}

function changeHorn(event, audio) {
  currentHorn = event.target.value
  console.log(currentHorn)
  imgPath = "assets/images/" + currentHorn + ".svg"
  audioPath = "assets/audio/" + currentHorn + ".mp3"
  const img = document.querySelector("img")
  img.src = imgPath
  img.alt = currentHorn
  console.log(audio)
  audio.src = audioPath
}

function playSound(event, audio) {
    if (currentHorn == "party-horn"){
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti()
    }
    audio.play()
}

function changeSoundLevel(event, audio) {

  soundLevel = event.target.value
  audio.volume = soundLevel / 100
  const volumeImg = document.querySelector("div > img")
  if(soundLevel < 1){
    volumeImg.src = "assets/icons/volume-level-0.svg"
  } else if(soundLevel < 34) {
    volumeImg.src = "assets/icons/volume-level-1.svg"
  } else if(soundLevel < 68) {
    volumeImg.src = "assets/icons/volume-level-2.svg"
  } else {
    volumeImg.src = "assets/icons/volume-level-3.svg"
  }
}

/**
 * First, every time we change the selected horn, we need to change the img
 * as well as some internal variable to track said horn.
 * 
 */