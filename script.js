const numberInput = document.querySelector('.number-input');
const calcBtn = document.querySelector('.calc-btn');
const resultDiv = document.querySelector('.result');

calcBtn.addEventListener('click', () => {
  let num = Number(numberInput.value);

  let square = num * num;
  let cube = num * num * num;
  let remainder = num % 5;

  resultDiv.innerHTML = `
    <p>Квадрат: ${square}</p>
    <p>Куб: ${cube}</p>
    <p>Залишок від ділення на 5: ${remainder}</p>
  `;
});





const resultDivTwo = document.querySelector('.result-two');

function isEven(number) {
  return number % 2 === 0;
}

for (let i = 1; i <= 10; i++) {
  if (isEven(i)) {
    resultDivTwo.innerHTML += `<p>${i} - парне</p>`;
  } else {
    resultDivTwo.innerHTML += `<p>${i} - непарне</p>`;
  }
}




const colorBtn = document.querySelector('.color-btn');
const colors = ["red", "blue", "green", "yellow", "purple"];
let index = 0;

colorBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = colors[index];

  index++;

  if (index >= colors.length) {
    index = 0;
  }
});