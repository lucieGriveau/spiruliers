<template>
  <div className="hello">
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
