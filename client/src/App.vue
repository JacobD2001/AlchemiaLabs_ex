<template>
  <div id="app">
    <router-view></router-view> <!-- This line is crucial for displaying routed components -->
  </div>
</template>

<script>
export default {
  name: 'App',
  // No need to import or declare components here since routing handles component rendering
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
