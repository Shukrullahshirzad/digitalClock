let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let amPm = document.querySelector("#am-pm");

function digitalClock(){
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  if(h>12){
    h = h - 12;
    amPm.textContent = "PM"
  }
  hours.textContent = (h<10) ?"0"+ `${h}` : h;
  minutes.textContent = (m<10) ?"0"+ `${m}` : m;
  seconds.textContent = (s<10) ?"0"+ `${s}` : s;

  setInterval(digitalClock, 1000);
}
digitalClock();