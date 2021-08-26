<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <CustomersList/>
    <ResellersList/>
    <SuppliersList/>
  </div>
</template>

<script>
import CustomersList from './CustomersList.vue'
import ResellersList from './ResellersList.vue'
import SuppliersList from './CustomersList.vue'

export default {
  name: 'Home',
  props: {
    msg: String
  },
  components: {
    CustomersList,
    ResellersList,
    SuppliersList,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
