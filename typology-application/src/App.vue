<template>
  <div id="app">
    <Navbar id="navbar" />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  background: #fdfdfd;
}
#navbar {
  position: fixed;
  width: 100vw;
  z-index: 2;
}
.title-font {
  font-family: "Karla", sans-serif;
  margin: 0;
}
button {
  font-family: "Karla", sans-serif;
}
.text-font {
  font-family: "Courier Prime", monospace;
}
* {
  box-sizing: border-box;
  margin: 0;
}
::-moz-selection {
  /* Code for Firefox */
  color: #9c6137;
  background: #ffeecf;
}

::selection {
  color: #9c6137;
  background: #fff4c2;
}
</style>
