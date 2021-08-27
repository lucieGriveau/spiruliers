<template>
<div>

  <h1>Suppliers List</h1>

  <b-table :data="suppliers">
    <b-table-column field="id" label="ID" numeric v-slot="props">
      {{ props.row.id }}
    </b-table-column>
    <b-table-column field="name" label="Supplier" numeric v-slot="props" >
      {{ props.row.name }}
    </b-table-column>
    <b-table-column field="checkedAt" label="Date d'Insertion"  numeric v-slot="props">
      {{ props.row.checkedAt }}
    </b-table-column>
    <b-table-column field="status" label="Status" numeric v-slot="props" >
      {{ props.row.status }}
    </b-table-column>
    <b-table-column field="latitude" label="Latitude" numeric v-slot="props">
      {{ props.row.latitude }}
    </b-table-column>
    <b-table-column field="action" label="Action" v-slot="props">
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

  <router-link :to="{ name: 'map', params:{ datas: suppliers} }">Voir carte</router-link>






</div>
</template>

<script>
import axios from "axios";

// import Supplier from "./Supplier";

export default {
  name: "SuppliersList",
  data() {
    return {
      loading: false,
      error: null,

      suppliers: [
        // {
        //   id: 1,
        //   name: 'Fourni',
        //   checkedAt: '',
        //   status: 'actif',
        //   latitude: '35°',
        //   longitude: '45',
        // },
        // {
        //   id: 2,
        //   name: 'Super Spi',
        //   checkedAt: '',
        //   status: 'actif',
        //   latitude: '35°',
        //   longitude: '45',
        // },
        // {
        //   id: 3,
        //   name: 'Web Spi',
        //   checkedAt: '',
        //   status: 'actif',
        //   latitude: '35°',
        //   longitude: '45',
        // },


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
      ],

    }
  },
  mounted() {
    this.loading = true;
    axios
        .get('https://heroku-campus-suppliers.herokuapp.com/api/suppliers')
        .then(response => (this.suppliers = response.data.data))
        .catch(error => console.log(error))
        .finally(() => this.loading = false)
  }
  }

</script>

<style scoped>

</style>
