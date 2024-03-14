<template>
  <div class="fibo">
    <h1>Fibonacci</h1>
    <h2>Calculate the nth Fibonacci number</h2>
    <div class="form-container">
      <input
        v-model="num"
        type="number"
        placeholder="Enter index of fibonacci number"
      />
      <button @click="callFibo">Calculate Fibonacci</button>
    </div>
    <div v-if="fibo !== null" class="result-display">
      Fibonacci number: {{ fibo }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FiboCalculator",
  data() {
    return {
      num: 0,
      fibo: null,
    };
  },
  methods: {
    async callFibo() {
      let n = parseFloat(this.num);

      if (!Number.isInteger(n)) {
        alert("Please enter a valid integer number.");
        return;
      }

      try {
        const response = await axios.post("http://localhost:3000/api/fibo", {
          n: this.num,
        });
        this.fibo = response.data.fibonacciNumber;
      } catch (error) {
        console.error("There was an error!", error);
      }
    },
  },
};
</script>

<style>
.fibo {
  /* Style as needed */
}
</style>
