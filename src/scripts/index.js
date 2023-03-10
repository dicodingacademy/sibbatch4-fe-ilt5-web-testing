import '../styles/styles.css';

import Calculator from './Calculator';

window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const firstInputEl = document.querySelector('#input1');
  const secondInputEl = document.querySelector('#input2');
  const resultEl = document.querySelector('#result');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = {
      firstNumber: firstInputEl.value,
      secondNumber: secondInputEl.value,
    };

    const operatorType = event.submitter.textContent.toLowerCase();
    let result = calculate(operatorType, data);

    setResult(result);
  });

  function setResult(content) {
    resultEl.textContent = content;
  }

  function calculate(operator, data) {
    let result = 0;
    switch (operator) {
      case 'add':
        result = Calculator.addTwoNumber(data.firstNumber, data.secondNumber);
        break;
      case 'subtract':
        result = Calculator.subtractTwoNumber(
          data.firstNumber,
          data.secondNumber,
        );
        break;
      case 'multiply':
        result = Calculator.multiplyTwoNumber(
          data.firstNumber,
          data.secondNumber,
        );
        break;
      case 'divide':
        result = Calculator.divideTwoNumber(
          data.firstNumber,
          data.secondNumber,
        );
        break;
      default:
        alert('Operator tak diketahui');
        break;
    }

    return result;
  }
});
