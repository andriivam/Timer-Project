// FUNCTION FOR THE STOPWATCH 

let [milliseconds,second,minute,] = [0,0,0];
let timerRef = document.querySelector('.mainTime');
let int = null;
document.getElementById('start').addEventListener('click', ()=>{if(int!==null){
clearInterval(int);
}
int = setInterval(mainTime,10);
});
document.getElementById('stop').addEventListener('click', ()=>{
clearInterval(int);
});
document.getElementById('reset').addEventListener('click', ()=>{clearInterval(int);
[milliseconds,seconds,minutes,hours] = [0,0,0];
timerRef.innerHTML = '00 : 00 : 00';
});
function mainTime(){
milliseconds+=10;
if(milliseconds == 1000){
milliseconds = 0;
second++;
if(second == 60){
second = 0;
minute++;
if(minute == 60){
minute = 0;
}
}
}
let m = minute < 10 ? "0" + minute : minute;
let s = second < 10 ? "0" + second : second;
let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
timerRef.innerHTML = ` ${m} : ${s} : ${ms}`;
}

// FUNCTION FOR THE COUNT-DOWN

// const hoursEl = document.querySelector('#hours');
// const minutesEl = document.querySelector('#minutes');
// const secondsEl = document.querySelector('#seconds');
// const btnStart = document.querySelector('.btn-start-resume');
// const btnPause = document.querySelector('.btn-pause');
// const btnStop = document.querySelector('.btn-stop');
// const btnReset = document.querySelector('.btn-reset');
// let interval;
// let pause = false;
// let totalSeconds = 0;
// let totalSecondsBackup = 0;

// init();

// function init() {
//     btnPause.style.display = 'none';
//     btnStop.style.display = 'none';
//     btnReset.style.display = 'none';


//     btnStart.addEventListener('click', () => {
//         const hours = parseInt(hoursEl.value);
//         const minutes = parseInt(minutesEl.value);
//         const seconds = parseInt(secondsEl.value);

//         totalSecondsBackup = totalSeconds = hours * 60 * 60 + minutes * 60 + seconds;
//         if (totalSeconds < 0) {
//             return;
//         }

//         startTimer();

//         btnPause.style.display = 'inline-block';
//         btnStop.style.display = 'inline-block';
//         btnReset.style.display = 'inline-block';
//         btnStart.style.display = 'none';
//     });

//     btnPause.addEventListener('click', () => {
//         pause = !pause;
//         if (pause) {
//             btnPause.innerText = 'Resume';
//         } else {
//             btnPause.innerText = 'Pause';
//         }
//     })

//     btnStop.addEventListener('click', () => {
//         stopTimer();
//         totalSeconds = totalSecondsBackup;
//         pause = false;
//         updateInputs();

//         btnPause.style.display = 'none';
//         btnStop.style.display = 'none';
//         btnReset.style.display = 'none';
//         btnStart.style.display = '';
//     })

//     btnReset.addEventListener('click', () => {
//         totalSeconds = totalSecondsBackup;
//         updateInputs();
//     })
// }

// function startTimer() {
//     interval = setInterval(() => {

//         if (pause) return;
//         totalSeconds--;
//         updateInputs();

//         if (totalSeconds <= 0) {
//             stopTimer();
//         }
//     }, 1000)
// }

// function stopTimer() {
//     interval = clearInterval(interval);
// }

// function updateInputs() {
//     const hours = Math.floor(totalSeconds / 60 / 60);
//     const minutes = Math.floor(totalSeconds / 60);
//     const seconds = totalSeconds % 60;

//     hoursEl.value = hours;
//     minutesEl.value = minutes;
//     secondsEl.value = seconds;
// }