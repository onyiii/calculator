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
let negative = "-";

controls.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.textContent === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.textContent === "." && haveDot) {
      return;
    }
    if (inputNumber === "" && e.target.textContent === "0") return;
    else {
      inputNumber += e.target.textContent;
    }

    input.value = inputNumber;
  });
});
operations.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    haveDot = false;

    if (hiddenDisplay && inputNumber && lastOperation) {
      mathOperation();
    } else {
      result = Number(inputNumber);
    }
    clearVar(e.target.textContent);
    lastOperation = e.target.textContent;
  });
});
function clearVar(name = "") {
  hiddenDisplay += inputNumber + " " + name + " ";
  input.value = result;
  inputNumber = "";
}
function mathOperation() {
  if (lastOperation === "*") {
    result = Number(result) * Number(inputNumber);
  } else if (lastOperation === "+") {
    result = Number(result) + Number(inputNumber);
  } else if (lastOperation === "-") {
    result = Number(result) - Number(inputNumber);
  } else if (lastOperation === "/") {
    result = Number(result) / Number(inputNumber);
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
  inputNumber = "";
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
  } else if (e.key === "Backspace") {
    clickDelete();
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
function clickDelete() {
  deleteLast.click();
}
