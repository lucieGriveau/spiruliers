<template>
<div class="home">
  <h1>💊 Welcome to Spiruliars 💊</h1>

  <!--<ResellersList />
    <CustomersList />
    <SuppliersList />-->
</div>
</template>

<script>
// import CustomersList from './CustomersList.vue'
// import ResellersList from './ResellersList.vue'
// import SuppliersList from './SuppliersList.vue'

export default {
  name: 'Home',
  // props: {
  //   msg: String
  // },
  components: {
    // CustomersList,
    // ResellersList,
    // SuppliersList,
  }
}
</script>

<style>

h1 {
  font-size: 35px;
  color: #2d654e;
  width: 50%;
  margin: 0 auto;
}

h1:after {
  display: block;
  content: '';
  border-bottom: solid 3px #2d654e;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
}

h1:hover:after {
  transform: scaleX(1);
}

h1.fromRight:after {
  transform-origin: 100% 50%;
}

h1.fromLeft:after {
  transform-origin: 0% 50%;
}

</style>
