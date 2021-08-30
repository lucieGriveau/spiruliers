<template>
  <div>
    <h1>Customers list</h1><br>
    <p v-if="loading">Loading...</p>
    <b-table :data="customers">
      <b-table-column field="id" label="ID" width="40" numeric v-slot="props">
        {{ props.row.id }}
      </b-table-column>
      <b-table-column field="firstname" label="First name" v-slot="props">
        {{ props.row.firstName }}
      </b-table-column>
      <b-table-column field="lastname" label="Last name" v-slot="props">
        {{ props.row.lastName }}
      </b-table-column>
      <b-table-column field="action" label="Actions" v-slot="props">
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
              name:'CustomerEdit',
              params:{
                edit:props.row.edit,
                customer:props.row,
               }
            }">
            <b-button type="primary-light">Editer</b-button>
        </router-link>

        <b-button type="primary-light">Supprimer</b-button>


      </b-table-column>
    </b-table>
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
  data() {
    return {
      customers: [],
      loading: false,
      error: null,
    }
  },
  methods: {
    getData() {
      this.loading = true
      axios
          .get('https://heroku-campus-suppliers.herokuapp.com/api/customers')
          .then(response => {
            this.customers = response.data.data;
            // console.log(this.customers);
            // console.log(response);
            // console.log(response.data);
            // console.log(response.data.data);
          })
          .catch(error => {
            // console.log(error)
            this.error = error
          })
          .finally(() => {
            this.loading = false;
          })
    }
  },
  mounted() {
    this.getData()
  }
}

</script>

<style scoped>

</style>