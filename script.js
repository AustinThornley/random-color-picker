'use strict';

const colorEl = document.getElementById('color');
const buttonEl = document.getElementById('colorButton');

buttonEl.addEventListener('click', getRandomColor);

function getRandomColor() {
  let randomNum = Math.floor(Math.random() * 256);
  let randomNum1 = Math.floor(Math.random() * 256);
  let randomNum2 = Math.floor(Math.random() * 256);

  let newColor = `rgb(${randomNum1},${randomNum2},${randomNum})`;
  colorEl.textContent = newColor;
  document.body.style.background = newColor;
}
