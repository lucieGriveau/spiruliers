<template>
  <div class="list">

    <h2>Nos Fournisseurs</h2>

    <div>
      <router-link class="carte" :to="{ name: 'map', params:{ datas: suppliers} }">  Voir sur la carte </router-link>
        <router-link class="carte"
        :to="{
              name:'AddSupplier',
              params:{
                id:suppliers.id,
                supplier:suppliers,
              }
            }"> Ajouter un Fournisseur
    </router-link>
  </div>


 <b-table
        :data="suppliers">
      <!--:checkedAt="date">-->
    <b-table-column field="id" label="ID" centered numeric sortable v-slot="props">
      {{ props.row.id }}
    </b-table-column>
    <b-table-column field="name" label="Supplier" centered numeric sortable v-slot="props" >
      {{ props.row.name }}
    </b-table-column>
    <b-table-column field="checkedAt"  label="Date d'Insertion" centered numeric sortable v-slot="props" :value="formatDate()" >
<!--      {{ date}}-->
      {{ props.row.checkedAt}}
    </b-table-column>
    <b-table-column field="status" type="boolean" label="Stock" numeric centered v-slot="props" >
      {{ props.row.status === true? "Oui" : "Non" }}
    </b-table-column>

    <b-table-column field="action" label="" v-slot="props">
      <router-link
          :to="{
          name:'Supplier',
          params:{
            id:props.row.id,
            supplier:props.row,
            }
          }">
          <b-button type="is-success is-light">Voir</b-button>
      </router-link>

      <router-link
          :to="{
          name:'EditSupplier',
          params:{
            // id:props.row.id,
            supplier:props.row,
            }
          }">
          <b-button type="is-warning is-light ">Editer</b-button>
        </router-link>

        <b-button type="is-danger is-light" @click="deleteID(props.row.id)">Supprimer</b-button>
    </b-table-column>
  </b-table>
    <br>

    <b-button type="is-success is-light" @click="pages(1)">Previous</b-button>
    <b-button type="is-success is-light" @click="pages(2)">Next</b-button>

    <br>
</div>
</template>

<script>
import moment from 'moment';
import axios from "axios";


export default {
  name: "SuppliersList",
  moment,
  // format,
  props: {
  },
  data() {
    return {
      loading: false,
      error: null,

      suppliers: [],
    }
  },

  mounted() {

    this.pages()
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

    formatDate(date) {
      return moment(date).format('dd.mm.YYYY');
    },

    deleteID(id){
      axios
          .delete('https://heroku-campus-suppliers.herokuapp.com/api/suppliers/' + id)
      this.pages()
    },
  }
}
</script>





<style scoped>




</style>
