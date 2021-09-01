<template>
  <section id="edit_form">
    <h1>Modifier les données d'une commande</h1>
    <b-field label="Date de commande">
      <b-input v-model="dataUpdate.date"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Numéro de commande">
      <b-input v-model="dataUpdate.number"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Prix de la commande">
      <b-input v-model="dataUpdate.price"
               type="email"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field>
      <router-link to="/orders">
        <b-button type="is-success is-light" @click="updateID">Enregistrer</b-button>
      </router-link>
    </b-field>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "UpdateOrder",
  props: {
    order: Object
  },
  data() {
    return {
      dataUpdate: {
        date: this.order.date,
        number: this.order.number,
        price: this.order.price,
      }
    }
  },
  methods: {
    updateID() {
      // console.log(this.dataUpdate);
      axios
          .put('https://heroku-campus-suppliers.herokuapp.com/api/orders/' + this.order.id, this.dataUpdate)
          .then(response => {
            console.log(response.data)
          })
    }
  },
}
</script>

<style scoped>

</style>