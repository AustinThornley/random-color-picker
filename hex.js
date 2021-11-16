'use strict';

const colorEl = document.getElementById('color');
const buttonEl = document.getElementById('colorButton');

const hex = {
  1: '#4F009A',
  2: '#00584e',
  3: '#52adeb',
  4: '#914949',
};

buttonEl.addEventListener('click', getRandomColor);

function getRandomColor() {
  let randomHex = Math.floor(Math.random() * 4) + 1;
  colorEl.textContent = hex[randomHex];
  document.body.style.background = hex[randomHex];
}
