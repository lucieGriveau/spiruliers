<template>
  <div>
    <h1>Customers list</h1>

    <div>
      <p>Pour ajouter un client, click sur le bouton ajouter</p>
      <router-link
          :to="{
              name:'CustomerEdit',
              params:{
                id:customers.id,
                customer:customers,
              }
            }">
        <b-button type="primary-light">Ajouter</b-button>
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
          <b-button type="primary-light">Voir</b-button>
        </router-link>
        <router-link
            :to="{
              name:'CustomerUpdate',
              params:{
                id:props.row.id,
                customer:props.row,
               }
            }">
            <b-button type="primary-light">Modifier</b-button>
        </router-link>

        <b-button type="primary-light">Supprimer</b-button>

      </b-table-column>
    </b-table>
    <div>
      <b-button type="primary-light" @click="getData(1)">Previous</b-button>
      <b-button type="primary-light" @click="getData(2)">Next</b-button>
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
    }
  },
  methods: {
    getData (currentPage) {
      this.loading = true
      axios
          .get('https://heroku-campus-suppliers.herokuapp.com/api/customers?page=' + currentPage)
          .then(response => {
            this.customers = response.data.data;
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
    // getMoreData() {
    //   this.loading = true
    //   axios
    //       .get('https://heroku-campus-suppliers.herokuapp.com/api/customers?page=2')
    //       .then(response => {
    //         this.customers = response.data.data;
    //       })
    //       .catch(error => {
    //         // console.log(error)
    //         this.error = error
    //       })
    //       .finally(() => {
    //         this.loading = false;
    //       })
    // }
  },
  mounted() {
    this.getData()
    // this.getMoreData()
  }
}

</script>

<style scoped>

</style>