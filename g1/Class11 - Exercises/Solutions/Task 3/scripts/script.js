// Elements
let fontSmallBtn = document.querySelector('#font-small');
let fontNormalBtn = document.querySelector('#font-normal');
let fontLargeBtn = document.querySelector('#font-large');
let titleTextInput = document.querySelector('#title-text');
let titleHeading = document.getElementById('title');
let titleBtn = document.querySelector('#change-title');
let green = document.querySelector('#color-green');
let blue = document.querySelector('#color-blue');
let red = document.querySelector('#color-red');
let yellow = document.querySelector('#color-yellow');

// Functrions

function changeFontSize(fontSize) {
  titleHeading.style.fontSize = fontSize + 'px';
}

function changeColor(color) {
  titleHeading.style.backgroundColor = color;
}

// Event Listeners

titleBtn.addEventListener('click', function() {
  titleHeading.innerText = titleTextInput.value;
});

fontSmallBtn.addEventListener('click', function() {
  changeFontSize(20);
});

fontNormalBtn.addEventListener('click', function() {
  changeFontSize(30);
});

fontLargeBtn.addEventListener('click', function() {
  changeFontSize(40);
});

red.addEventListener('click', function() {
  changeColor('red');
});

green.addEventListener('click', function() {
  changeColor('green');
});

blue.addEventListener('click', function() {
  changeColor('blue');
});

yellow.addEventListener('click', function() {
  changeColor('yellow');
});
