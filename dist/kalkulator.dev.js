"use strict";

console.log("Selamat, anda menggunakan Javascript di website");
var calculator = {
  displayNumber: '0',
  operator: null,
  firstNumber: null,
  waitingForSecondNumber: false
};

function updateDisplay() {
  document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator() {
  calculator.displayNumber = '0';
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.waitingForSecondNumber = false;
}

function inputDigit(digit) {
  if (calculator.displayNumber === '0') {
    calculator.displayNumber = digit;
  } else {
    calculator.displayNumber += digit;
  }
}

function inverseNumber() {
  if (calculator.displayNumber === '0') {
    return;
  }

  calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator) {
  if (!calculator.waitingForSecondNumber) {
    calculator.operator = operator;
    calculator.waitingForSecondNumber = true;
    calculator.firstNumber = calculator.displayNumber;
    calculator.displayNumber = '0';
  } else {
    alert('Operator sudah ditetapkan');
  }
}

function performCalculation() {
  if (calculator.firstNumber == null || calculator.operator == null) {
    alert("Anda belum menetapkan operator");
    return;
  }

  var result = 0;

  if (calculator.operator === "+") {
    result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
  } else {
    result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
  }

  calculator.displayNumber = result;
}

var buttons = document.querySelectorAll(".button");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = buttons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var button = _step.value;
    button.addEventListener('click', function (event) {
      // mendapatkan objek elemen yang diklik
      var target = event.target;

      if (target.classList.contains('clear')) {
        clearCalculator();
        updateDisplay();
        return;
      }

      if (target.classList.contains('negative')) {
        inverseNumber();
        updateDisplay();
        return;
      }

      if (target.classList.contains('equals')) {
        performCalculation();
        updateDisplay();
        return;
      }

      if (target.classList.contains('operator')) {
        handleOperator(target.innerText);
        return;
      }

      inputDigit(target.innerText);
      updateDisplay();
    });
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}