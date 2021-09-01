<template>
  <section id="edit_form">
    <h1>Ajouter un client</h1>
    <b-field label="Prénom">
      <b-input v-model="dataAdded.firstName"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Nom">
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

    <b-field label="Code postal">
      <b-input v-model="dataAdded.codePostal"
               type="text"
               maxlength="5">
      </b-input>
    </b-field>

    <b-field label="Ville">
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

    <b-field label="Revendeur">
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

</style>