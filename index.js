let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let amPm = document.querySelector("#am-pm");

function digitalClock(){
  let date = new Date();
  let h = (date.getHours()<10) ?"0"+ `${date.getHours()}` : date.getHours();
  let m = (date.getMinutes()<10) ?"0"+ `${date.getMinutes()}` : date.getMinutes();
  let s = (date.getSeconds()<10) ?"0"+ `${date.getSeconds()}` : date.getSeconds();
  hours.textContent = h ;
  minutes.textContent = m
  seconds.textContent = s 
  if(h>12){
    if(amPm.textContent =="AM"){
      amPm.textContent = "PM"
    }
    else{
      amPm.textContent = "AM"
    }
  }

  setInterval(digitalClock, 1000);
}
digitalClock();