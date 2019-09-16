const input = document.querySelector("#display");
const equal = document.querySelector(".equal");
const addButton = document.querySelector(".add");
const subButton = document.querySelector(".sub");
const multiplyButton = document.querySelector(".multiply");
const divideButton = document.querySelector(".divide");
const nums = document.querySelectorAll(".num");
const clearButton = document.querySelector(".clear");

nums.forEach(e => {
  e.addEventListener("click", evt => {
    if (input.value === 00) {
      input.value * 100;
    } else {
      input.value += evt.target.innerText;
    }
  });
});

function calcFunc() {
  let obj = {
    valueHold: 0,
    currentValue: 0,

    arithmeticPosition: [],

    add: function() {
      this.valueHold = Number(input.value);
      input.value = "";
      equal.addEventListener("click", () => {
        this.currentValue = this.valueHold + Number(input.value);
        // this.currentValue = this.valueHold + nextValue;
        input.value = this.currentValue;
        this.valueHold = 0;
      });
    },
    sub: function() {
      input.value = this.currentValue;
    },

    clear: function() {
      this.currentValue = 0;
      input.value = "";
    }
  };

  return obj;
}
const calc = calcFunc();

let temp = 0;

addButton.addEventListener("click", () => {
  calc.add();
});
subButton.addEventListener("click", () => {
  calc.sub();
});
clearButton.addEventListener("click", () => {
  calc.clear();
});
