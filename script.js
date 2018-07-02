const btns = document.querySelectorAll("button");
const [firstInput, secondInput] = document.querySelectorAll("input");
const result = document.getElementById("result");

function count(action, firstValue, secondValue) {
  switch (action) {
    case "+":
      return firstValue + secondValue;
    case "-":
      return firstValue - secondValue;
    case "/":
      return firstValue / secondValue;
    case "*":
      return firstValue * secondValue;
    case "%":
      return firstValue % secondValue;
    case "clear":
      clearInput();
      return "";
  }
}

const handler = action => {
  const firstValue = parseInt(firstInput.value, 10);
  const secondValue = parseInt(secondInput.value, 10);

  if (action === 'clear') {
    result.innerHTML = count(action);
  } else if (firstValue && secondValue) {
    result.innerHTML = count(action, firstValue, secondValue);
  } else {
    alert("Please insert numbers");
  }
};

const clearInput = () => {
  firstInput.value = "";
  secondInput.value = "";
};

btns.forEach(item => item.addEventListener('click', (e) => handler(e.target.innerHTML)));

