<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/spiruline.jpg" width="250px">
    <Home msg="Welcome to Spiruliers"/>
    <div>
      <router-link to="/"></router-link> <!--Lien route contenu composant Home-->
      <router-link to="/suppliers">Consulter la liste des fournisseurs</router-link> <!--Lien route contenu composant SuppliersList-->
      <router-link to="/resellers">Consulter la liste des revendeurs</router-link> <!--Lien route contenu composant ResellersList-->
      <router-link to="/customers">Consulter la liste des clients</router-link> <!--Lien route contenu composant CustomersList-->
      <router-view></router-view> <!--Navigation route(s)-->
    </div>
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
