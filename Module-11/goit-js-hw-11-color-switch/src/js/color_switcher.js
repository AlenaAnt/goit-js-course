const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const buttonStartRef = document.querySelector('[data-action="start"]');
const buttonStopRef = document.querySelector('[data-action="stop"]');
const bodyRef = document.body;
let setIntervalID;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let flag = true;

const buttonStartClick = () => {
  if (flag) {
    flag = false;
    buttonStartRef.setAttribute('disabled', true);
    setIntervalID = setInterval(() => {
      let color = colors[randomIntegerFromInterval(0, colors.length)];
      document.body.style.backgroundColor = color;
    }, 1000);
  }
};
buttonStartRef.addEventListener('click', buttonStartClick);

const buttonStopClick = () => {
  clearInterval(setIntervalID);
  buttonStartRef.removeAttribute('disabled');
  flag = true;
};
buttonStopRef.addEventListener('click', buttonStopClick);
