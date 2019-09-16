function calcFunc() {
  let obj = {
    valueHold: 0,
    currentValue: 0,

    add: function(val) {
      this.valueHold = val;
      input.value = "";
      console.log("here 1");

      console.log("here 2");

      equal.addEventListener("click", () => {
        console.log("here 3");

        let nextValue = Number(input.value);
        console.log(this.valueHold + nextValue);
        this.currentValue = this.valueHold + nextValue;
        valueHold = 0;
      });
      return currentValue;
    }
  };
}
