function isValueNumber(value) {
  return /(^-?[0-9]+\.{1}\d+$)|(^-?[1-9]*$)|(^-?0{1}$)/.test(value + "");
}

Vue.component("input-number", {
  template: `
        <div>
            <input type="text" :value="currentValue" @change="handleChange" @keyup.up="enterUp" @keyup.down="enterDown">
            <button @click="handleDown" :disabled="currentValue <= min">-</button>
            <button @click="handleUp" :disabled="currentValue >= max">+</button>
            <hr>
            <button @click="step++">step +</button>
            {{step}}
            <button @click="step===0?0:step--">step -</button>
        </div>
    `,
  props: {
    max: {
      type: Number,
      default: Infinity,
    },
    min: {
      type: Number,
      default: -Infinity,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentValue: this.value,
      step: 1,
    };
  },
  // data() {
  //     var val = this.value
  //     if (val > this.max) val = max;
  //       if (val < this.min) val = min;
  //     return {
  //         currentValue:val
  //     }
  // },
  watch: {
    currentValue: function (val) {
      console.log("watch-currentValue");
      this.$emit("input", val);
      this.$emit("on-change", val);
    },
    value: function (val) {
      this.updateValue(val);
    },
  },
  methods: {
    enterUp: function () {
      console.log("---");
      this.handleUp()
    },
    enterDown: function () {
      console.log("+++");
      this.handleDown()
    },
    updateValue: function (val) {
      console.log("updateValue");
      if (val > this.max) val = max;
      if (val < this.min) val = min;
      this.currentValue = val;
    },
    handleDown: function () {
      if (this.currentValue <= this.min) return;
      //   this.currentValue -= 1;
      let tem = this.currentValue - this.step;
      if(tem <= this.min) return
      this.currentValue = tem
    },
    handleUp: function () {
      if (this.currentValue >= this.max) return;
      //   this.currentValue += 1;
      let tem = this.currentValue + this.step;
      if(tem >= this.max) return
      this.currentValue = tem
    },
    handleChange: function (event) {
      var val = event.target.value.trim();
      var max = this.max;
      var min = this.min;
      if (isValueNumber(val)) {
        val = Number(val);
        this.currentValue = val;
        if (val > max) {
          this.currentValue = max;
        } else if (val < min) {
          this.currentValue = min;
        }
      } else {
        event.target.value = this.currentValue;
      }
    },
  },
  mounted() {
    this.updateValue(this.value);
  },
});
