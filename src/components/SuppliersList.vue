<template>
<div>
  <h1>Suppliers List</h1>

  <Supplier v-for="supplier in suppliers"
            :key="supplier.id"
            :name="supplier.name"
            :checkedAt="supplier.checkedAt"
            :latitude="supplier.latitude"
            :longitude="supplier.longitude"
            />
</div>
</template>

<script>
import Supplier from "./Supplier";

export default {
  name: "SuppliersList",
  components: {
    Supplier
  },
data () {
  return {
    suppliers: [
      {
        id: 1,
        name: 'SpiFourni',
        checkedAt: '26-08-2021',
        latitude: '35°',
        longitude: '45',
      },
      {
        id: 2,
        name: 'SpiForni',
        checkedAt: '26-08-2021',
        latitude: '35°',
        longitude: '45',
      }
    ]
  }
}
}
</script>

<style scoped>

</style>
