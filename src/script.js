let textElem = document.querySelector(".text");
let minusElem = document.querySelector(".btn__minus");
let plusElem = document.querySelector(".btn__plus");
let clrElem = document.querySelector(".btn__clr");

let count = 0;

updateDisplay();

function updateDisplay() {
  textElem.innerHTML = count;
}

plusElem.addEventListener("click", () => {
  count++;
  updateDisplay();
});

minusElem.addEventListener("click", () => {
  count--;
  updateDisplay();
});
clrElem.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});
