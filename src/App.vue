<template>
  <div id="app">
    <div class="nav"> <!--Lien routes composants-->
      <router-link to="/">Home</router-link>
      <router-link to="/suppliers">Fournisseurs</router-link>
      <router-link to="/resellers">Revendeurs</router-link>
      <router-link to="/customers">Clients</router-link>
    </div>
<!--    <Home msg="Welcome to Spiruliers"/>-->
    <img alt="Vue logo" src="./assets/spiruline.jpg" width="250px">

    <router-view></router-view> <!--Affichage du contenu des routes-->
  </div>
</template>

<script>
 // import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
     // Home
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
  margin: 50px auto;
  width: 1170px;
}

.nav a{
  padding: 10px 20px;
  margin: 0 10px;
  color: #000000;
  border: 2px solid black;
  transition: 1s;
}

.nav a:hover{
  background-color: #2d654e;
  color: #ffffff;
}

.nav{
  margin-bottom: 50px;
}

div{
  margin-bottom: 50px;
}

</style>
