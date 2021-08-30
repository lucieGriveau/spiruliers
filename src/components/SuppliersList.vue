<template>
<div>

<!--  <h1>Suppliers List</h1>-->

 <b-table


:data="suppliers"
:checkedAt="date">


    <b-table-column field="id" label="ID" numeric v-slot="props">
      {{ props.row.id }}
    </b-table-column>
    <b-table-column field="name" label="Supplier" numeric v-slot="props" >
      {{ props.row.name }}
    </b-table-column>
    <b-table-column field="checkedAt" label="Date d'Insertion"  numeric v-slot="props">
      {{ props.row.checkedAt.toLocaleString()}}
    </b-table-column>
    <b-table-column field="status" label="Status" numeric v-slot="props" >
      {{ props.row.status }}
    </b-table-column>
    <b-table-column field="action" label="" v-slot="props">
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

      <b-table-column field="action" label="" v-slot="props" >
      <router-link
          :to="{
          name:'EditSupplier',
          params:{
            // id:props.row.id,
            supplier:props.row,
            }
          }"><b-button type="is-primary">Edit</b-button>
      </router-link>
    </b-table-column>

    <b-table-column field="action" label="" >

         <b-button type="is-primary">Supprimer</b-button>

    </b-table-column>


  </b-table>
  <b-button type="primary-light" @click="pages(1)">Previous</b-button>
  <b-button type="primary-light" @click="pages(2)">Next</b-button>

<br>
  <br>

  <router-link :to="{ name: 'map', params:{ datas: suppliers} }">Voir carte</router-link>






</div>
</template>

<script>
import { format } from 'timeago.js';
import axios from "axios";



export default {
  name: "SuppliersList",
  format,
  data() {
    return {
      loading: false,
      error: null,

      suppliers: [
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
  computed: { //para poder atualizar a data de atualização a cada refresh
    date () {
      return format(this.checkedAt, 'en_US');
    },
  },

  mounted() {

  this.pages()
 // //   this.Page2()
     },

  methods: {
    pages(page) {
      this.loading = true;
      axios
          .get('https://heroku-campus-suppliers.herokuapp.com/api/suppliers?page=' + page)
          .then(response => (console.log(this.suppliers = response.data.data)))
          .catch(error => console.log(error))
          .finally(() => this.loading = false)
    },
  }

}


</script>

<style scoped>

</style>
