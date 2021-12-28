const input = document.querySelector(".input");
const controls = document.querySelectorAll(".controls");
const operations = document.querySelectorAll(".operations");
const equals = document.querySelector(".equals");
const reset = document.querySelector(".reset");

let inputNumber = "";
let haveDot = false;

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
