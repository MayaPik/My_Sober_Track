// To set two dates to two variables
const sober = new Date("03/15/2021");
let today = new Date();
  
// To calculate the time difference of two dates
let difference_In_Time = today.getTime() - sober.getTime();
  
// To calculate the no. of days between two dates
let difference_In_Days = Math.round(difference_In_Time / (1000 * 3600 * 24));
  
const soberDays =document.getElementById('sober')
let full = document.getElementById('fireworks')
soberDays.innerHTML = `I AM SOBER FOR <h2 class="green">${difference_In_Days}</h2> DAYS`

const fireworks = new Fireworks(full, { /* options */ })
fireworks.start()