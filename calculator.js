const input = document.querySelector("#display");
const equal = document.querySelector(".equal");
const addButton = document.querySelector(".add");
const subButton = document.querySelector(".sub");
const multiplyButton = document.querySelector(".multiply");
const divideButton = document.querySelector(".divide");
const nums = document.querySelectorAll(".num");
const clearButton = document.querySelector(".clear");
const memory = document.querySelector("#historyDisplay");
let NUM_STREAM = false;

nums.forEach(e => {
  e.addEventListener("click", evt => {
    if (!NUM_STREAM) input.value = "";
    NUM_STREAM = true;
    input.value += evt.target.innerText;
  });
});

function calcFunc() {
  let obj = {
    valueHold: 0,
    currentValue: 0,
    valFlag: false,
    memLength: 0,
    mathMemory: {
      memCount: 0,
      mem: []
    },
    position: [
      { addition: false, last: 0, val: false },
      { subtraction: false, last: 0, val: false },
      { multiplication: false, last: 0, val: false },
      { division: false, last: 0, val: false }
    ],
    add: function() {
      this.position[0].addition = true;
      this.valueHold += Number(input.value);
      input.value = this.valueHold;
      NUM_STREAM = false; // Stop taking in numbers take full number typed.
      this.currentValue = this.valueHold;
      input.value = input.value;
      equal.addEventListener("click", () => {
        if (this.position[0].addition) {
          this.currentValue += Number(input.value);
          input.value = this.currentValue;
          this.valueHold = 0;
          NUM_STREAM = false;
          this.reset();
          console.log("Addition 'OFF'");
        }
      });
      console.log("Addition 'ON'");
    },
    sub: function() {
      this.position[1].subtraction = true;
      if (this.valFlag) {
        NUM_STREAM = true;
        input.value = input.value;
        this.valueHold -= input.value;
      } else {
        input.value = this.currentValue += Number(input.value * -1);
        NUM_STREAM = false; // Stop taking in numbers take full number typed.
        input.value = input.value;
      }
      equal.addEventListener("click", () => {
        if (this.position[1].subtraction) {
          this.position[1].last = Number(input.value);
          this.currentValue -= Number(input.value);
          this.position[1].val = true;
          input.value = this.currentValue;
          this.valueHold = 0;
          NUM_STREAM = false;
          this.reset();
          console.log("Subtraction 'OFF'");
        }
      });
      console.log("Subtraction 'ON'");
    },
    multiply: function() {
      this.position[2].multiplication = true;
      this.valueHold += Number(input.value);
      input.value = this.valueHold;
      NUM_STREAM = false; // Stop taking in numbers take full number typed.
      this.currentValue = this.valueHold;
      input.value = input.value;

      equal.addEventListener("click", () => {
        if (this.position[2].multiplication) {
          this.position[2].last = Number(input.value);
          this.position[2].val = true;
          this.currentValue *= Number(input.value);
          input.value = this.currentValue;
          this.valueHold = 0;
          NUM_STREAM = false;
          this.position[2].multiplication = false;
          console.log("Multiplication 'OFF'");
        }
      });
      console.log("Multiplication 'ON'");
    },
    divide: function() {
      this.position.division = true;
      this.valueHold = Number(input.value);
      input.value = "";
      equal.addEventListener("click", () => {
        if (this.position.division) {
          this.currentValue = this.valueHold / Number(input.value);
          input.value = this.currentValue;
          this.valueHold = 0;
          this.position.division = false;
          console.log("Division 'OFF'");
        }
      });
      console.log("Division 'ON'");
    },

    clear: function() {
      // if (this.position[0].val) {
      //   this.currentValue -= this.position[0].last;
      //   this.position[0].last = 0;
      //   input.value = this.currentValue;
      //   this.position[0].val = false;
      // } else {
      this.currentValue = 0;
      this.valueHold = 0;
      this.reset;
      input.value = "";
    },
    reset: function() {
      this.position[0].addition = false;
      this.position[1].subtraction = false;
      this.position[2].multiplication = false;
      this.position[3].division = false;
    }
  };

  return obj;
}
const calc = calcFunc();

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
memory.addEventListener("focus", () => {
  memory.value = "";
  memory.value = memory.value;
});
memory.addEventListener("focusout", () => {
  memory.value = `Mem length : ${memory.value}`;
  calc.memLength = Number(memory.value);
});

clearButton.addEventListener("click", () => {
  calc.clear();
});
