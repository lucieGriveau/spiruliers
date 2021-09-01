<template>
  <section class="edit_form">
    <div class="titre">
      <h2>Mettre à jour un revendeur</h2>
    </div>
    <b-field label="Nom">
      <b-input v-model="dataUpdate.name"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Description">
      <b-input v-model="dataUpdate.description"
      type="text"
      maxlength="200"></b-input>
    </b-field>

    <b-field label="Latitude">
      <b-input v-model="dataUpdate.latitude"
               type="number"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Longitude">
      <b-input v-model="dataUpdate.longitude"
               type="number"
               maxlength="30">
      </b-input>
    </b-field>


    <b-field>
      <router-link to="/resellers">
        <b-button type="primary-light">Enregistrer</b-button>
      </router-link>
    </b-field>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "ResellerUpdate",
  props: {
    reseller: Object
  },
  data() {
    return {
      dataUpdate: {
        name: this.reseller.name,
        description: this.reseller.description,
        latitude: this.reseller.latitude,
        longitude: this.reseller.longitude,
        reseller_id: this.reseller.supplier_id
      }
    }
  },
  methods: {
    updateID() {
      // console.log(this.dataUpdate);
      axios
          .put('https://heroku-campus-suppliers.herokuapp.com/api/resellers/' + this.reseller.id, this.dataUpdate)
          .then(response => {
            console.log(response.data)
          })
    }
  }
}
</script>
