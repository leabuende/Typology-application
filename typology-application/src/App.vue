<template>
  <div id="app">
    <Navbar id="navbar"/>
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  },

}
  


</script>
<style>
#app {
  background: #fdfdfd;
}
#navbar{
  position: fixed;
  width:100vw;
  z-index:2;
}
.title-font {
  font-family: "Karla", sans-serif;
  margin:0;
}
button{
  font-family:"Karla", sans-serif ;
}
.text-font {
  font-family: "Courier Prime", monospace;
}
* {
  box-sizing: border-box;
  margin: 0;
}
</style>
