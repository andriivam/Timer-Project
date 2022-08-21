/*
document.getElementById("days").innerHTML = days + "d "
document.getElementById("hours").innerHTML = hours + "h " 
document.getElementById("mins").innerHTML = minutes + "m " 
document.getElementById("secs").innerHTML = seconds + "s"

let countDownDate = new Date("Jul 25, 2021 16:37:52").getTime();
let myFunc = setInterval(function() {
    // code goes here
    }, 1000)
    let now = new Date().getTime();
let timeLeft= countDownDate - now;
    
let days = Math.floor(timeLeft/ (1000 * 60 * 60 * 24));
let hours = Math.floor((timeLeft% (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((timeLeft% (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((timeLeft% (1000 * 60)) / 1000);


if (timeLeft < 0) {
    clearInterval(myFunc);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = "" 
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
    document.getElementById("end").innerHTML = "TIME UP!!";
}
*/
// rick function


  let counter = 0;
  
  const intervalId = setInterval(counting, 1000);
  const time = setTimeout(function () {
    
    clearInterval(intervalId, console.log("timeout!!!"));
  }, 5000);

  function counting() {
    counter++;
    document.getElementById("time_start").innerHTML = counter;
   setTimeout (function () {
    document.getElementById("time_end").innerText = 'timeout!!!'
   }, 5000);
    console.log(counter);
  }

// timer 2 from Internet
/*
function timer() {
    document.getElementById("time").innerHTML = "00:" + sec;
    let sec = 30;
    let timer = setInterval(function () {
      sec--;
      if (sec < 0) {
        clearInterval(timer);
      }
    }, 1000);
}
*/