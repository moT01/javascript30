const secondHand = document.getElementById('second-hand');
const minuteHand = document.getElementById('minute-hand');
const  hourHand  = document.getElementById('hour-hand');

let secondRotations = 0;
let minuteRotations = 0;
let   hourRotations = 0;

setInterval(function() {
  const date = new Date()
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours   = date.getHours();
  
  const sDegrees = seconds/60*360 + secondRotations;
  const mDegrees = minutes/60*360 + minuteRotations;
  const hDegrees =   hours/12*360 +   hourRotations;
    
  secondHand.style.transform = "rotate(" + sDegrees + "deg)";  
  minuteHand.style.transform = "rotate(" + mDegrees + "deg)";
    hourHand.style.transform = "rotate(" + hDegrees + "deg)";

  //this accounts for the transition from 359deg to 0deg - so now it will go from 359 -> 360 -> 361...
  seconds === 59 ? secondRotations += 360 : null;
  minutes === 59 ? minuteRotations += 360 : null;
    hours === 59 ?   hourRotations += 360 : null;
}, 1000)
