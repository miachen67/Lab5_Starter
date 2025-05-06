// explore.js

window.addEventListener('DOMContentLoaded', init);
let currentVoice = null
let voices

function init() {
  const synth = window.speechSynthesis
  const voiceSelect = document.getElementById("voice-select")

  synth.onvoiceschanged = () => {
    voices = synth.getVoices();
    
      for (let i = 0; i < voices.length; i++){
          const option = document.createElement("option")
          option.value = voices[i].name
          option.textContent = `${voices[i].name} (${voices[i].lang})`;
          if (voices[i].default) {
            option.textContent += " — DEFAULT";
          }
          voiceSelect.appendChild(option)
      }
  }
  const talkButton = document.querySelector("button")
  talkButton.addEventListener("click", (event) => talk(event, synth))
  voiceSelect.addEventListener("change", (event) => changeVoice(event, voices))
}

function talk(event, synth) {
  const inputs = document.getElementById("text-to-speak")
  console.log(inputs)
  let textBlurb = inputs.value
  let utterance = new SpeechSynthesisUtterance(textBlurb);
  utterance.voice = currentVoice;
  const face = document.querySelector("img")
  face.src = "assets/images/smiling-open.png"
  synth.speak(utterance)
  utterance.addEventListener("end", () => {
    face.src = "assets/images/smiling.png"
  })
}

function changeVoice(event, voices) {
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === event.target.value) {
      currentVoice = voices[i];
    }
  }
}
  
