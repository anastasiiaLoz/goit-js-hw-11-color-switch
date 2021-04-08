const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  //Напиши скрипт, который после нажатия кнопки Start, 
//   раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. 
//   При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

const refs = {
    start: document.querySelector('button[data-action="start"]'),
    stop: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body'),
}

let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  min = 0
  max = colors.length-1;

  return Math.floor(Math.random() * (max - min + 1) + min);
};



function clickOnStartBtn(){
  intervalId = setInterval (() =>{
  refs.body.style.backgroundColor =  colors[randomIntegerFromInterval()]
  
},1000)
refs.start.removeEventListener('click', clickOnStartBtn);}

function clickOnStopBtn(){
  clearInterval(intervalId);
  refs.start.addEventListener('click', clickOnStartBtn);
}


refs.stop.addEventListener('click', clickOnStopBtn);
refs.start.addEventListener('click', clickOnStartBtn);
