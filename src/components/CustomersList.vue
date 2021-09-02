<template>
  <div class="list">
    <h2>Nos clients</h2>

    <div class="bouton-carte">
      <router-link class="carte"
          :to="{
              name:'AddCustomer',
              params:{
                id:customers.id,
                customer:customers,
              }
            }">
        Ajouter un client
      </router-link>
    </div>

    <div class="prev-next">
      <b-button class="previous" type="is-success is-light" @click="previousPage" v-show="currentPage-1>0">⬅</b-button>
      <b-button class="next" type="is-success is-light" @click="nextPage" v-show="currentPage+1<=lastPage">➡</b-button>
    </div>

    <p v-if="loading">Loading...</p>

    <b-table :data="customers">
     <b-table-column field="id" label="ID" centered numeric sortable v-slot="props">
        {{ props.row.id }}
      </b-table-column>
      <b-table-column field="firstname" label="Prénom" centered sortable v-slot="props">
        {{ props.row.firstName }}
      </b-table-column>
      <b-table-column field="lastname" label="Nom" centered sortable v-slot="props">
        {{ props.row.lastName }}
      </b-table-column>
      <b-table-column field="action" label="" centered v-slot="props">
        <router-link
            :to="{
              name:'Customer',
              params:{
                id:props.row.id,
                customer:props.row,
              }
            }">
          <b-button type="is-success is-light">Voir</b-button>
        </router-link>
        <router-link
            :to="{
              name:'UpdateCustomer',
              params:{
                id:props.row.id,
                customer:props.row,
               }
            }">
            <b-button type="is-warning is-light">Editer</b-button>
        </router-link>

        <b-button type="is-danger is-light" @click="deleteID(props.row.id)" >Supprimer</b-button>

      </b-table-column>

    </b-table>
    <br>



    <div>
      <b-button type="is-success is-light" @click="previousPage" v-show="currentPage-1>0">Précédent</b-button>
      <b-button type="is-success is-light" @click="nextPage" v-show="currentPage+1<=lastPage">Suivant</b-button>
<!--      <b-button type="primary-light" @click="finalPage" v-show="lastPage">Dernière page</b-button>-->
    </div>
<br>
  </div>
</template>

<script>
//import Customer from "./Customer.vue";
import axios from "axios"

export default {
  name: "CustomersList",
  components: {
    //Customer
  },
  props:{
    customer: Object
  },
  data() {
    return {
      customers: [],
      loading: false,
      error: null,
      currentPage: 1,
      lastPage: 1,
    }
  },
  methods: {
    getData () {
      this.loading = true
      axios
          .get('https://heroku-campus-suppliers.herokuapp.com/api/customers?page=' + this.currentPage)
          .then(response => {
            this.customers = response.data.data;
            this.lastPage = response.data.last_page;
            // console.log(this.customers);
            // console.log(response);
            // console.log(response.data);
            // console.log(response.data);
          })
          .catch(error => {
            // console.log(error)
            this.error = error
          })
          .finally(() => {
            this.loading = false
          })
    },
    nextPage() {
      this.currentPage += 1
      this.getData()
    },
    previousPage() {
      this.currentPage -= 1
      this.getData()
    },
    finalPage(){
      this.currentPage = this.lastPage
      this.getData()
    },
    deleteID(id){
      // console.log(id)
      axios
          .delete('https://heroku-campus-suppliers.herokuapp.com/api/customers/' + id)
              this.getData()
          //   {
          //       id: this.id,
          //       firstName: this.firstName,
          //       lastName: this.lastName,
          //       email: this.email,
          //       address: this.address,
          //       codePostal: this.codePostal,
          //       city: this.city,
          //     },
          // )
    },
  },
  mounted() {
    this.getData()
  }
}

</script>

<style scoped>

</style>