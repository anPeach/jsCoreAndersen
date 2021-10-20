import { buttonsTypes } from './strategy.js';

const calculator = document.querySelector('.calculator');
const buttonsList = calculator.querySelector('.calculator__buttons');
const input = calculator.querySelector('.calculator__screen');

const clickOnButton = (evt) => {
  if (evt.target.type !== 'button') {
    return;
  }

  const targetTypeOf = evt.target.dataset.typeOfButton;

  try {
    buttonsTypes[targetTypeOf](evt.target);
  } catch (err) {
    input.value = err.message;
  }
};

buttonsList.addEventListener('click', clickOnButton);
