const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const deadline = document.querySelector('.deadline');
const giveaway = document.querySelector('.giveaway');

const items = document.querySelectorAll('.deadline-format h4');

// const items acheives this
// const days = document.querySelector('.days');
// const hours = document.querySelector('.hours');
// const mins = document.querySelector('.mins');
// const secs = document.querySelector('.secs');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2022, 5, 30, 11, 30, 9, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const futureMonth = months[futureDate.getMonth()];
const futureDay = weekdays[futureDate.getDay()];
const furureDayNumber = futureDate.getDate();

giveaway.textContent = `giveaway ends on ${futureDay}, ${futureMonth} ${furureDayNumber} ${year} at ${hours}:${mins}am`;

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // values in MS
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMiniute = 60 * 1000;
  // calculate values
  let daysR = Math.floor(t / oneDay);
  let hoursR = Math.floor((t % oneDay) / oneHour);
  let minsR = Math.floor((t % oneHour) / oneMiniute);
  let secsR = Math.floor((t % oneMiniute) / 1000);

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  // set values array;
  const values = [daysR, hoursR, minsR, secsR];

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class='expired'>sorry, this giveaway has expired</h4>  `;
  }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
