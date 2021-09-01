<template>
  <section id="edit_form">
    <h1>Modifier les données d'un client</h1>
    <b-field label="Prénom">
      <b-input v-model="dataUpdate.firstName"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Nom">
      <b-input v-model="dataUpdate.lastName"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Email">
      <b-input v-model="dataUpdate.email"
               type="email"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Code postal">
      <b-input v-model="dataUpdate.codePostal"
               type="text"
               maxlength="5">
      </b-input>
    </b-field>

    <b-field label="Ville">
      <b-input v-model="dataUpdate.city"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Adresse">
      <b-input v-model="dataUpdate.address"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Téléphone">
      <b-input v-model="dataUpdate.phoneNumber"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Revendeur">
      <b-input v-model="dataUpdate.reseller_id"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field>
      <router-link to="/customers">
        <b-button type="is-success is-light" @click="updateID">Enregistrer</b-button>
      </router-link>
    </b-field>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "UpdateCustomer",
  props: {
    customer: Object
  },
  data() {
    return {
      dataUpdate: {
        firstName: this.customer.firstName,
        lastName: this.customer.lastName,
        email: this.customer.email,
        codePostal: this.customer.codePostal,
        city: this.customer.city,
        address: this.customer.address,
        phoneNumber: this.customer.phoneNumber,
        reseller_id: this.customer.reseller_id
      }
    }
  },
  methods: {
    updateID() {
      // console.log(this.dataUpdate);
      axios
          .put('https://heroku-campus-suppliers.herokuapp.com/api/customers/' + this.customer.id, this.dataUpdate)
          .then(response => {
            console.log(response.data)
          })
    }
  },
}
</script>

<style scoped>

</style>