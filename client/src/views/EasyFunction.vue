<template>
  <div class="easy-function">
    <h1>Easy Function</h1>
    <input v-model="num1" type="number" placeholder="Enter number 1" />
    <input v-model="num2" type="number" placeholder="Enter number 2" />
    <button @click="callEasyFunction">Calculate Sum</button>
    <div v-if="sum !== null">Sum: {{ sum }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EasyFunction',
  data() {
    return {
      num1: 0,
      num2: 0,
      sum: null,
    };
  },
  methods: {
    async callEasyFunction() {
      try {
        const response = await axios.get(`http://localhost:3000/api/easyFunction?num1=${this.num1}&num2=${this.num2}`);
        this.sum = response.data.sum;
      } catch (error) {
        console.error('There was an error!', error);
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
