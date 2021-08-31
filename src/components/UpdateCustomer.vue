<template>
  <section id="edit_form">
    <h1>Update customer</h1>
    <b-field label="First name">
      <b-input v-model="dataUpdate.firstName"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Last name">
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

    <b-field label="Postal code">
      <b-input v-model="dataUpdate.codePostal"
               type="text"
               maxlength="5">
      </b-input>
    </b-field>

    <b-field label="City">
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

    <b-field label="Reseller">
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

#edit_form {
  border: #2d654e;
}

</style>