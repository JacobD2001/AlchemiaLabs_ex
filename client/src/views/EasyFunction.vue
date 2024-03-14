<template>
  <div class="easy-function">
    <h1>Easy Function</h1>
    <h2>Calculate the sum of two integer numbers</h2>
    <div class="form-container">
      <input v-model="num1" type="number" placeholder="Enter number 1" />
      <input v-model="num2" type="number" placeholder="Enter number 2" />
      <button @click="callEasyFunction">Calculate Sum</button>
    </div>
    <div v-if="sum !== null" class="result-display">Sum: {{ sum }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EasyFunction",
  data() {
    return {
      num1: 0,
      num2: 0,
      sum: null,
    };
  },
  methods: {
    async callEasyFunction() {
      let n1 = parseFloat(this.num1);
      let n2 = parseFloat(this.num2);

      if (!Number.isInteger(n1) || !Number.isInteger(n2)) {
        alert("Please enter valid integer numbers.");
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:3000/api/easyFunction?num1=${n1}&num2=${n2}`
        );
        this.sum = response.data.sum;
      } catch (error) {
        console.error("There was an error!", error);
        this.sum = "An error occurred. Please try again.";
      }
    },
  },
};
</script>

<style>
.easy-function {
  /* Style as needed */
}
</style>
