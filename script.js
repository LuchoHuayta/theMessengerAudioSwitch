const buttonStart = document.getElementById('buttonStart')
const buttonChange = document.getElementById('buttonChange')
let audio16 = document.getElementById('audio16')
let audio8 = document.getElementById('audio8')
let video16 = document.getElementById('video16')
let video8 = document.getElementById('video8')
let image = document.getElementById('imgTitle')

audio16.volume = 0.05
audio8.volume = 0.05

buttonStart.addEventListener('click', () => {
    if(audio16.paused){
        audio16.play()
        audio8.play()
        video16.play()
        video8.play()
        image.style.display = 'none'
        buttonStart.textContent = "Pause"
    } else {
        audio16.pause()
        audio8.pause()
        video16.pause()
        video8.pause()
        buttonStart.textContent = "Play"
    }
})

buttonChange.addEventListener('click', () => {
    if(audio8.muted) {
        audio16.muted = true
        audio8.muted = false
        video16.style.display = "none"
        video8.style.display = "block"
        buttonChange.textContent = "Change to 16-bit"
    } else {
        audio8.muted = true
        audio16.muted = false
        video16.style.display = "block"
        video8.style.display = "none"
        buttonChange.textContent = "Change to 8-bit"
    }
})