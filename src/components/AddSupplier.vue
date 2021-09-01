<template>
  <section id="edit_form">
    <h1>Ajouter Fournisseur</h1>
    <b-field label="Entreprise">
      <b-input v-model="dataAdded.name"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Date">
      <b-input v-model="dataAdded.checkedAt"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Status">
      <b-input v-model="dataAdded.status"
               type="boolean"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Longitude">
      <b-input v-model="dataAdded.longitude"
               type="text"
               maxlength="10">
      </b-input>
    </b-field>

    <b-field label="Latitude">
      <b-input v-model="dataAdded.latitude"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>


    <router-link to="/suppliers">
      <b-button type="primary-light" @click="createID">Ajouter</b-button>
    </router-link>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "AddSupplier",
  data() {
    return {
       dataAdded: {
        name:"",
        checkedAt: "",
        status: "",
        longitude: "",
        latitude: "",
       }
    }
  },
  methods: {
    createID() {
      console.log(this.dataAdded)
      axios
          .post('https://heroku-campus-suppliers.herokuapp.com/api/suppliers', this.dataAdded)
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