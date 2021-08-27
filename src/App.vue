<template>
  <div id="app">
    <div> <!--Lien routes composants-->
      <router-link to="/">Home</router-link>
      <router-link to="/suppliers">Fournisseurs</router-link>
      <router-link to="/resellers">Revendeurs</router-link>
      <router-link to="/customers">Clients</router-link>
    </div>
    <Home msg="Welcome to Spiruliers"/>
    <img alt="Vue logo" src="./assets/spiruline.jpg" width="250px">

    <router-view></router-view> <!--Affichage du contenu des routes-->
  </div>
</template>

<script>
 import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
     Home
  }
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
