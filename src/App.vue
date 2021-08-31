<template>
  <div id="app">
    <div class="nav"> <!--Lien routes composants-->
      <router-link to="/">Home</router-link>
      <router-link to="/suppliers">Fournisseurs</router-link>
      <router-link to="/resellers">Revendeurs</router-link>
      <router-link to="/customers">Clients</router-link>
    </div>
<!--    <Home msg="Welcome to Spiruliers"/>-->
    <img alt="Vue logo" src="./assets/spiruline-mdr.jpg" width="50%">
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


.app img{
  border-radius: 150px;
  border: 2px solid #2d654e;
  margin: 50px 0;
}

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

body h1 {
  font-size: 35px;
  color: #2d654e;
  width: 50%;
  margin: 50px auto;
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
  width: 50%;
  margin: 0 auto;
}

.table-wrapper{
  margin-top: 50px;
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

div{
  margin-bottom: 50px;
}

.reseller-list button{
  background-color: none;
  color: black;
  border: 1px solid #ffffff;
  transition: 1s;
}

.reseller-list .see{
  border: 1px solid #2d654e;
}

.reseller-list .see:hover{
  border: 1px solid #2d654e;
  background-color: #2d654e;
  color: #ffffff;
}

.reseller-list .edit{
  border: 1px solid #ff9800;
}

.reseller-list .edit:hover{
  border: 1px solid #ff9800;
  background-color: #ff9800;
  color: #ffffff;
}

.reseller-list .del{
  border: 1px solid red;
}

.reseller-list .del:hover{
  border: 1px solid red;
  background-color: red;
  color: #ffffff;
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
}

.one .texts .box{
  width: 49%;
  margin: 0;
}


</style>
