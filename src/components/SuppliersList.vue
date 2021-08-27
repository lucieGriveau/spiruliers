<template>
<div>

  <h1>Suppliers List</h1>

  <b-table
      :data="suppliers"
      :columns="columns"
      :debounce-search="1000">


  <Supplier v-for="supplier in suppliers"
            :key="supplier.id"
          :supplier="supplier"
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
        status: 'actif',
        latitude: '35°',
        longitude: '45',
      },
      {
        id: 2,
        name: 'SuperSpi',
        checkedAt: '26-08-2021',
        status: 'actif',
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
        centered: true
      },

      {
        field: 'name',
        label: 'Supplier',
        searchable: true,
        centered: true
      },
      {
        field: 'checkedAt',
        label: "Date d'Insertion",
        searchable: true,
        centered: true
      },
      // {
      //   field: 'date',
      //   label: 'Ville',
      //   centered: true
      // },
      {
        field: 'status',
        label: 'Status',
        centered: true
      }
    ]



  }
}
}
</script>

<style scoped>

</style>
