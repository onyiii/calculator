const input = document.querySelector(".input");
const controls = document.querySelectorAll(".controls");
const operations = document.querySelectorAll(".operations");
const equals = document.querySelector(".equals");
const reset = document.querySelector(".reset");
const deleteLast = document.querySelector(".delete");

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
  mathOperation();
  clearVar();
  inputNumber = result;
  input.value = result;
  hiddenDisplay = "";
});
reset.addEventListener("click", (e) => {
  input.value = "0";
  inputNumber = "";
  hiddenDisplay = "";
  result = "";
});
deleteLast.addEventListener("click", (e) => {
  inputNumber = inputNumber.slice(0, -1);
  input.value = inputNumber;
});

window.addEventListener("keydown", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "."
  ) {
    clickButton(e.key);
  } else if (e.key === "*" || e.key === "+" || e.key === "-" || e.key === "/") {
    clickOperation(e.key);
  } else if (e.key === "Enter" || e.key === "=") {
    clickEqual();
  }
});
function clickButton(key) {
  controls.forEach((button) => {
    if (button.textContent === key) {
      button.click();
    }
  });
}
function clickOperation(key) {
  operations.forEach((button) => {
    if (button.textContent === key) {
      button.click();
    }
  });
}
function clickEqual() {
  equals.click();
}
