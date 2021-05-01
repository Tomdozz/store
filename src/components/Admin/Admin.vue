<template>
<div id="container">
    <Nav/>
    <router-view></router-view>
</div>
</template>

<script>
import Nav from './Navigation/Nav.vue'
export default {
  components: {
    Nav
    
  }
  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat');
/* local styles */
section{
    height: 100vh;
}
</style>