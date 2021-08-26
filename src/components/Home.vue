<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <ResellersList />
    <CustomersList />
    <SuppliersList />
  </div>
</template>

<script>
import CustomersList from './CustomersList.vue'
import ResellersList from './ResellersList.vue'
import SuppliersList from './SuppliersList.vue'

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
