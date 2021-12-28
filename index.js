const input = document.querySelector(".input");
const controls = document.querySelectorAll(".controls");
const operations = document.querySelectorAll(".operations");
const equals = document.querySelector(".equals");
const reset = document.querySelector(".reset");

let hiddenDisplay = "";
let inputNumber = "";
let haveDot = false;
let result = null;
let lastOperation = "";

controls.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.textContent === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.textContent === "." && haveDot) {
      return;
    }
    inputNumber += e.target.textContent;
    input.value = inputNumber;
  });
});
operations.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!inputNumber) return;
    haveDot = false;
    const operationName = e.target.textContent;
    if (hiddenDisplay && inputNumber && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(inputNumber);
    }
    clearVar(operationName);
    lastOperation = operationName;
  });
});
function clearVar(name = "") {
  hiddenDisplay += inputNumber + " " + name + " ";
  input.value = result;
  inputNumber = "";
  console.log(hiddenDisplay);
}
function mathOperation() {
  if (lastOperation === "*") {
    result = parseFloat(result) * parseFloat(inputNumber);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(inputNumber);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(inputNumber);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(inputNumber);
  }
}
equals.addEventListener("click", (e) => {
  if (!hiddenDisplay || !inputNumber) return;
  haveDot = false;
});
