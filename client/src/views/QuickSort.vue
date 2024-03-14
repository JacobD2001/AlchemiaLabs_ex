<template>
  <div class="quick-sort">
    <h1>Quick Sort</h1>
    <h2>Sort an array of numbers in ascending order</h2>
    <div class="form-container">
      <input
        v-model="arr"
        type="text"
        placeholder="Enter numbers separated by commas (e.g., 3,1,4)"
      />
      <button @click="callQuickSort">Sort</button>
    </div>
    <div v-if="sortedArr !== null" class="result-display">
      Sorted Array: {{ sortedArr }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "QuickSort",
  data() {
    return {
      arr: "",
      sortedArr: null,
    };
  },
  methods: {
    async callQuickSort() {
      const validInputPattern = /^\d+(,\s*\d+)*$/;

      if (!validInputPattern.test(this.arr.trim())) {
        alert(
          "Invalid input. Please enter numbers separated by commas (e.g., 1,2,3)."
        );
        return;
      }

      try {
        // Input validated, split the string and convert to an array of integers
        const arr = this.arr.split(",").map((num) => parseInt(num.trim(), 10));

        const response = await axios.post("http://localhost:3000/api/sort", {
          array: arr,
        });
        this.sortedArr = response.data.sortedArray;
      } catch (error) {
        console.error("There was an error!", error);
        this.sortedArr = "An error occurred. Please try again.";
      }
    },
  },
};
</script>

<style>
.quick-sort {
  /* Style as needed */
}
</style>
