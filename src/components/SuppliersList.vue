<template>
<div>

  <h1>Suppliers List</h1>

  <b-table :data="suppliers">
    <b-table-column field="id" label="ID" :td-attrs="columnTdAttrs" numeric v-slot="props">
      {{ props.row.id }}
    </b-table-column>
    <b-table-column field="name" label="Supplier" :td-attrs="columnTdAttrs" numeric v-slot="props">
      {{ props.row.name }}
    </b-table-column>
    <b-table-column field="checkedAt" label="Date d'Insertion" :td-attrs="columnTdAttrs" numeric v-slot="props">
      {{ props.row.checkedAt }}
    </b-table-column>
    <b-table-column field="status" label="Status" :td-attrs="columnTdAttrs" numeric v-slot="props">
      {{ props.row.status }}
    </b-table-column>
    <b-table-column field="action" label="Action" centered="true" v-slot="props">
      <router-link
          :to="{
          name:'Supplier',
          params:{
            id:props.row.id,
            supplier:props.row,
            }
          }"><b-button type="is-primary">Voir</b-button>
      </router-link>
    </b-table-column>
  </b-table>





</div>
</template>

<script>


// import Supplier from "./Supplier";

export default {
  name: "SuppliersList",
  // components: {
  //   Supplier
  // },

data () {
  return {
    suppliers: [
      {
        id: 1,
        name: 'Fourni',
        checkedAt: '26-08-2021',
        status: 'actif',
        latitude: '35°',
        longitude: '45',
        but: <template slot="actions">
          <b-button>Default</b-button>
        </template>
      },
      {
        id: 2,
        name: 'Super Spi',
        checkedAt: '26-08-2021',
        status: 'actif',
        latitude: '35°',
        longitude: '45',
      },
      {
        id: 3,
        name: 'Web Spi',
        checkedAt: '26-08-2021',
        status: 'actif',
        latitude: '35°',
        longitude: '45',
      },


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
        centered: true,
        selectable: true,
      },
      {
        field: 'checkedAt',
        label: "Date d'Insertion",
        // searchable: true,
        centered: true
      },

      {
        field: 'status',
        label: 'Status',
        centered: true
      },
    ]



  }
}
}
</script>

<style scoped>

</style>
