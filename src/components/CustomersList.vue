<template>
  <div>
    <h1>Customers list</h1>

    <div>
      <p>Pour ajouter un client, click sur le bouton ajouter</p>
      <router-link
          :to="{
              name:'AddCustomer',
              params:{
                id:customers.id,
                customer:customers,
              }
            }">
        <b-button type="is-light">Ajouter</b-button>
      </router-link>
    </div>
    <p v-if="loading">Loading...</p>
    <b-table :data="customers">
      <b-table-column field="id" label="ID" numeric centered v-slot="props">
        {{ props.row.id }}
      </b-table-column>
      <b-table-column field="firstname" label="First name" centered v-slot="props">
        {{ props.row.firstName }}
      </b-table-column>
      <b-table-column field="lastname" label="Last name" centered v-slot="props">
        {{ props.row.lastName }}
      </b-table-column>
      <b-table-column field="action" label="Actions" centered v-slot="props">
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
            <b-button type="is-warning is-light">Modifier</b-button>
        </router-link>

        <b-button type="is-danger is-light" @click="deleteID(props.row.id)" >Supprimer</b-button>

      </b-table-column>
    </b-table>
    <div>
      <b-button type="primary-light" @click="previousPage" v-show="currentPage-1>0">Previous</b-button>
      <b-button type="primary-light" @click="nextPage" v-show="currentPage+1<=lastPage">Next</b-button>
    </div>

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
            this.loading = false;
          })
    },
    nextPage() {
      this.currentPage += 1;
      this.getData();
    },
    previousPage() {
      this.currentPage -= 1;
      this.getData();
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