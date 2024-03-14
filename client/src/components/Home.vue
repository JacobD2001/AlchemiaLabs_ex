<template>
  <div class="home">
    <h1>Welcome to the API Dashboard</h1>
    <nav>
      <ul>
        <li><router-link to="/easyfunction">Easy Function API</router-link></li>
        <li><router-link to="/fibo">Fibonacci API</router-link></li>
        <li><router-link to="/quicksort">Quick Sort API</router-link></li>
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
}
li {
  margin: 10px 0;
}
a {
  text-decoration: none;
  color: #42b983; 
}
</style>
