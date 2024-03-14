<template>
  <div class="home">
    <h1>Welcome to the Alchemia API Dashboard</h1>
    <nav>
      <ul>
        <li><router-link to="/easyfunction" class="api-button">Easy Function API</router-link></li>
        <li><router-link to="/fibo" class="api-button">Fibonacci API</router-link></li>
        <li><router-link to="/quicksort" class="api-button">Quick Sort API</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
  display: flex; 
  justify-content: center; 
  gap: 10px; 
}

.api-button {
  display: inline-block; 
  background-color: #0f3460; 
  color: #00ffea; 
  text-decoration: none; 
  padding: 10px 20px;
  border-radius: 5px; 
  border: none; 
  cursor: pointer; 
  transition: background-color 0.3s ease; 
}

.api-button:hover {
  background-color: #1a1a2e; 
}
</style>
