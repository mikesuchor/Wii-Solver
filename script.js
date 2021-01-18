const comboArr = [];
var counter = 0;
var num1 = 1;
var num2 = 1;
var num3 = 1;
var num4 = 1;

fourthDigit(1);
thirdDigit(2);
secondDigit(2);
firstDigit(2);
console.log(comboArr);

function fourthDigit(n) {
  for (let i = n; i <= 4; i++) {
    num4 = i;
    comboArr.push(convertToSymbols([num1, num2, num3, num4]));
  }
  num4 = 1;
}

function thirdDigit(n) {
  for (let i = n; i <= 4; i++) {
    num3 = i;
    comboArr.push(convertToSymbols([num1, num2, num3, num4]));
    fourthDigit(2);
  }
  num3 = 1;
}

function secondDigit(n) {
  for (let i = n; i <= 4; i++) {
    num2 = i;
    comboArr.push(convertToSymbols([num1, num2, num3, num4]));
    fourthDigit(2);
    thirdDigit(2);
  }
  num2 = 1;
}

function firstDigit(n) {
  for (let i = n; i <= 4; i++) {
    num1 = i;
    comboArr.push(convertToSymbols([num1, num2, num3, num4]));
    fourthDigit(2);
    thirdDigit(2);
    secondDigit(2);
  }
  num1 = 1;
}

function convertToSymbols(numbersArray) {
  return numbersArray.map((num) => {
    console.log(num);
    if (num === 1) return '♠';
    if (num === 2) return '♥';
    if (num === 3) return '♦';
    if (num === 4) return '♣';
  });
}

document.querySelector('.counter').innerHTML = `${counter + 1}`;
document.querySelector('.combo').innerHTML = comboArr[counter].join(' ');
const nextButton = document.querySelector('.next');
nextButton.addEventListener('click', () => {
  counter++;
  document.querySelector('.counter').innerHTML = counter;
  document.querySelector('.combo').innerHTML = comboArr[counter].join(' ');
});
