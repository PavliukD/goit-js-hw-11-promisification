import changeColor from './changeColor'


const startBtn = document.querySelector("[data-action='start']")
const stopBtn = document.querySelector("[data-action='stop']")
let timerSwitch = null

export default function start(){
startBtn.addEventListener('click', startSwitch)
}

function startSwitch(){
    startBtn.removeEventListener('click',startSwitch)
    timerSwitch = setInterval(() =>{
    changeColor()
    }, 1000)
    stop()
}

function stop(){
    stopBtn.addEventListener('click', stopSwitch)
}

function stopSwitch(){
    stopBtn.removeEventListener('click', stopSwitch)
    clearInterval(timerSwitch)
    start()
}