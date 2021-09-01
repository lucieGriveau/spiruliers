<template>
  <section id="edit_form_supplier">
    <h1>Modifier Fournisseur</h1>
    <b-field label="Entreprise">
      <b-input v-model="dataUpdate.name"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Date">
      <b-input v-model="dataUpdate.checkedAt"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Status">
      <b-input v-model="dataUpdate.status"
               type="boolean"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Longitude">
      <b-input v-model="dataUpdate.longitude"
               type="text"
               maxlength="10">
      </b-input>
    </b-field>

    <b-field label="Latitude">
      <b-input v-model="dataUpdate.latitude"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field>
      <router-link to="/suppliers">
        <b-button type="is-success is-light" @click="updateID">Enregistrer</b-button>
      </router-link>
    </b-field>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "EditSupplier",
  props: {
    supplier: Object
  },
  data() {
    return {
      dataUpdate: {
        name: this.supplier.name,
        checkedAt: this.supplier.checkedAt,
       status: this.supplier.status,
        longitude: this.supplier.longitude,
        latitude: this.supplier.latitude,
      }
    }
  },
  methods: {
    updateID() {
      axios
          .put('https://heroku-campus-suppliers.herokuapp.com/api/suppliers/' + this.supplier.id, this.dataUpdate)
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