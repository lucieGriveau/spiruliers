<template>
  <div id="app">
    <div class="nav"> <!--Lien routes composants-->
      <router-link to="/">Accueil</router-link>
      <router-link to="/suppliers">Fournisseurs</router-link>
      <router-link to="/resellers">Revendeurs</router-link>
      <router-link to="/customers">Clients</router-link>
      <router-link to="/orders">Commandes</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
<!--    <Home msg="Welcome to Spiruliers"/>-->
    <img class="logo" alt="Vue logo" src="./assets/spiruline.jpg">
    <router-view>
      <!--Affichage du contenu des routes-->
    </router-view>
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

body .logo{
  border-radius: 500px;
  border: 2px solid #2d654e;
  margin: 0 auto 30px auto;
  width: 25%;
  box-shadow: 5px 5px 20px black;
  transition: 1s;
}

body .logo:hover{
  transform: rotate(360deg);
}

.home .tablette{
  box-shadow: inset 5px 5px 10px #000000;
  width: 35%;
}

.home .shampoo{
  width: 60%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  width: 1170px;
}

.nav{
  padding-top: 50px;
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

body .table{
  background-color: #c7ded5;
}

body .table th{
  background-color: #2d654e;
}

body .table th span{
  color: #ffffff;
}

body h1 {
  font-size: 35px;
  color: #2d654e;
  width: 50%;
  margin: 25px auto 0 auto;
}

body h1:after {
  display: block;
  content: '';
  border-bottom: solid 3px #2d654e;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
}

body h1:hover:after {
  transform: scaleX(1);
}

body h1.fromRight:after {
  transform-origin: 100% 50%;
}

body h1.fromLeft:after {
  transform-origin: 0% 50%;
}

body .titre{
  margin-bottom: 50px;
}

body h2{
  padding: 25px 50px;
  margin: 0 auto;
  margin-bottom: 50px;
  width: 50%;
  font-size: 25px;
  color: #2d654e;
  border-top: 2px solid #2d654e;
  border-bottom: 2px solid #2d654e;
  border-left: 50px solid #2d654e;
  border-right: 50px solid #2d654e;
}

.contact{
  margin: 0 auto;
}

.formulaire{
  width: 50%;
  margin: 0 auto;
}

.table-wrapper{
  margin-top: 50px;
}

.bouton-carte{
  margin-bottom: 25px;
}

.carte {
  color: #000000;
  padding: 10px 50px;
  border: 1px solid #2d654e;
  font-weight: bold;
  transition: 1s;
}

.carte:active {
  color: #ffffff;
  padding: 10px 50px;
  border: 1px solid #000000;
}

.carte:hover {
  color: #ffffff;
  padding: 15px 75px;
  background-color: #2d654e;
}

.list button{
  background-color: none;
  color: black;
  border: 1px solid #ffffff;
  transition: 1s;
}

.prev-next{
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}

.prev-next button{
  background-color: none;
  color: black;
  font-size: 25px;
}

.one p{
  margin-bottom: 20px;
}

.one .texts{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
}

.one .texts .box{
  width: 49%;
  margin: 0;
}

.edit_form {
  border: #2d654e;
  width: 50%;
  margin: 0 auto;
}

.edit_form h2{
  width: 100%;
}

</style>
