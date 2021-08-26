<template>
<div>
  <h1>Suppliers List</h1>
  <b-table
      :data="suppliers"
      :columns="columns"
      :debounce-search="1000">


  <Supplier v-for="supplier in suppliers"
            :key="supplier.id"
            :name="supplier.name"
            :checkedAt="supplier.checkedAt"
            :latitude="supplier.latitude"
            :longitude="supplier.longitude"
            />
  </b-table>


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
        name: 'SuperSpi',
        checkedAt: '26-08-2021',
        latitude: '35°',
        longitude: '45',
      }
    ],
    columns: [
      {
        field: 'id',
        label: 'ID',
        width: '100',
        numeric: true,
        searchable: true,
      },
      {
        field: 'first_name',
        label: 'First Name',
        searchable: true,
      },
      {
        field: 'name',
        label: 'supplier',
        searchable: true,
      },
      {
        field: 'date',
        label: 'Date',
        centered: true
      },
      {
        field: 'gender',
        label: 'Gender',
      }
    ]



  }
}
}
</script>

<style scoped>

</style>
