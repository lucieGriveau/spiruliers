<template>
  <section id="edit_form">
    <h1>Ajouter une commande</h1>
    <b-field label="Date">
      <b-input v-model="dataAdded.date"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Numéro de commande">
      <b-input v-model="dataAdded.number"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Prix">
      <b-input v-model="dataAdded.price"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <router-link to="/orders">
      <b-button type="primary-light" @click="createID">Ajouter</b-button>
    </router-link>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "AddOrder",
  data() {
    return {
      dataAdded: {
        date: "",
        number: "",
        price: "",
      }
    }
  },
  methods: {
    createID() {
      console.log(this.dataAdded)
      axios
          .post('https://heroku-campus-suppliers.herokuapp.com/api/orders', this.dataAdded)
          .then(response => {
            console.log(response)
          })
    }
  },
}
</script>

<style scoped>

</style>