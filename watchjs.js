let sec = 0;
let min = 0;
let hr = 0;
let k = 0;

const startTimer = () => {
  k = setInterval(add, 1000);
}

const pauseTimer = () => {
  clearInterval(k);
}

const resetTimer = () => {
  clearInterval(k);
  sec = 0;
  min = 0;
  hr = 0;
  document.getElementById("t3").innerHTML = formatTime(hr) + ":" + formatTime(min) + ":" + formatTime(sec);
}

const add = () => {
  sec++;
  if (sec === 60) {
    min++;
    sec = 0;
  }
  if (min === 60) {
    hr++;
    min = 0;
  }
  document.getElementById("t3").innerHTML = formatTime(hr) + ":" + formatTime(min) + ":" + formatTime(sec);
}

const formatTime = (time) => {
  return (time < 10) ? "0" + time : time;
}
