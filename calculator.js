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

    arithmeticPosition: [
      {
        addition: false,
        subtraction: false,
        multiplication: false,
        division: false
      }
    ],

    add: function() {
      this.arithmeticPosition.addition = true;
      this.valueHold = Number(input.value);
      input.value = "";
      equal.addEventListener("click", () => {
        if (this.arithmeticPosition.addition) {
          this.currentValue = this.valueHold + Number(input.value);
          input.value = this.currentValue;
          this.valueHold = 0;
          this.arithmeticPosition.addition = false;
          console.log("Addition 'OFF'");
        }
      });
      console.log("Addition 'ON'");
    },
    sub: function() {
      this.arithmeticPosition.subtraction = true;
      this.valueHold = Number(input.value);
      input.value = "";
      equal.addEventListener("click", () => {
        if (this.arithmeticPosition.subtraction) {
          this.currentValue = this.valueHold - Number(input.value);
          input.value = this.currentValue;
          this.valueHold = 0;
          this.arithmeticPosition.subtraction = false;
          console.log("Subtraction 'OFF'");
        }
      });
      console.log("Subtraction 'ON'");
    },
    multiply: function() {
      this.arithmeticPosition.multiplication = true;
      this.valueHold = Number(input.value);
      input.value = "";
      equal.addEventListener("click", () => {
        if (this.arithmeticPosition.multiplication) {
          this.currentValue = this.valueHold * Number(input.value);
          input.value = this.currentValue;
          this.valueHold = 0;
          this.arithmeticPosition.multiplication = false;
          console.log("Multiplication 'OFF'");
        }
      });
      console.log("Multiplication 'ON'");
    },
    divide: function() {
      this.arithmeticPosition.division = true;
      this.valueHold = Number(input.value);
      input.value = "";
      equal.addEventListener("click", () => {
        if (this.arithmeticPosition.division) {
          this.currentValue = this.valueHold / Number(input.value);
          input.value = this.currentValue;
          this.valueHold = 0;
          this.arithmeticPosition.division = false;
          console.log("Division 'OFF'");
        }
      });
      console.log("Division 'ON'");
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
multiplyButton.addEventListener("click", () => {
  calc.multiply();
});
divideButton.addEventListener("click", () => {
  calc.divide();
});
clearButton.addEventListener("click", () => {
  calc.clear();
});
