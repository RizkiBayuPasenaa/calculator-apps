let currentInput = '';
let previousInput = '';
let operator = '';
let result = 0;

const displayDiv = document.getElementById('display');

for (let i = 0; i <= 9; i++) {
  document.getElementById(i.toString()).addEventListener('click', function() {
    currentInput += i.toString();
    displayDiv.textContent = currentInput;
  });
}

document.getElementById('tambah').addEventListener('click', function() {
  setOperator('+');
});
document.getElementById('kurang').addEventListener('click', function() {
  setOperator('-');
});
document.getElementById('kali').addEventListener('click', function() {
  setOperator('*');
});
document.getElementById('bagi').addEventListener('click', function() {
  setOperator('/');
});

function setOperator(op) {
  if (currentInput !== '') {
    if (previousInput === '') {
      previousInput = currentInput;
    } else {
      calculate();
      previousInput = result.toString();
    }
    operator = op;
    currentInput = '';
    displayDiv.textContent = '';
  }
}

// Event Listener untuk tombol =
document.getElementById('hasil-eksekusi').addEventListener('click', function() {
  if (previousInput !== '' && currentInput !== '' && operator) {
    calculate();
    displayDiv.textContent = `${result}`;
    previousInput = result.toString();
    currentInput = '';
    operator = '';
  }
});

function calculate() {
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }
}

// Event Listener untuk tombol reset
document.getElementById('reset').addEventListener('click', function() {
  currentInput = '';
  previousInput = '';
  operator = '';
  result = 0;
  displayDiv.textContent = '';
});
