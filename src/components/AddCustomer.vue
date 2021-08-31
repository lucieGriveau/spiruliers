<template>
  <section id="edit_form">
    <h1>Edit customer</h1>
    <b-field label="First name">
      <b-input v-model="dataAdded.firstName"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Last name">
      <b-input v-model="dataAdded.lastName"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Email">
      <b-input v-model="dataAdded.email"
               type="email"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Postal code">
      <b-input v-model="dataAdded.codePostal"
               type="text"
               maxlength="5">
      </b-input>
    </b-field>

    <b-field label="City">
      <b-input v-model="dataAdded.city"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Adresse">
      <b-input v-model="dataAdded.address"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Téléphone">
      <b-input v-model="dataAdded.phoneNumber"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Reseller">
      <b-input v-model="dataAdded.reseller_id"
               type="text"
               maxlength="10">
      </b-input>
    </b-field>

    <router-link to="/customers">
      <b-button type="primary-light" @click="createID">Ajouter</b-button>
    </router-link>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "AddCustomer",
  data() {
    return {
      dataAdded: {
        firstName: "",
        lastName: "",
        email: "",
        codePostal: "",
        city: "",
        address: "",
        phoneNumber: "",
        reseller_id: 0,
      }
    }
  },
  methods: {
    createID() {
      console.log(this.dataAdded)
      axios
          .post('https://heroku-campus-suppliers.herokuapp.com/api/customers', this.dataAdded)
           .then(response => {
             console.log(response)
           })
    }
  },
}
</script>

<style scoped>

  #edit_form {
    border: #2d654e;
  }

</style>