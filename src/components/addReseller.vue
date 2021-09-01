<template>
  <section id="edit_form">
    <div class="titre">
      <h2>Ajout d'un revendeur</h2>
    </div>
    <b-field label="Nom">
      <b-input v-model="dataAdded.name"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Description">
      <b-input v-model="dataAdded.description"
      type="text"
      maxlength="200"></b-input>
    </b-field>

    <b-field label="Latitude">
      <b-input v-model="dataAdded.latitude"
               type="number"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Longitude">
      <b-input v-model="dataAdded.longitude"
               type="number"
               maxlength="30">
      </b-input>
    </b-field>

    <!-- <b-field hidden label="Crée le">
      <b-input :value="currentDate()"
               type="text">
      </b-input>
    </b-field>

    <b-field hidden label="Mis à jour le">
      <b-input :value="currentDate()"
               type="text">
      </b-input>
    </b-field>

    <b-field hidden label="Supplier ID">
      <b-input v-model="dataAdded.supplier_id"
               type="text">
      </b-input>
    </b-field> -->

    <b-field>
      <router-link to="/resellers">
        <b-button type="primary-light" @click="createID">Ajouter</b-button>
      </router-link>
    </b-field>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "addReseller",
  data() {
    return {
      dataAdded: {
        name: "",
        description: "",
        latitude: "",
        longitude: "",
        supplier_id: 0
      }
    }
  },
  methods: {
    createID() {
      console.log(this.dataAdded)
      axios
          .post('https://heroku-campus-suppliers.herokuapp.com/api/resellers', this.dataAdded)
           .then(response => {
             console.log(response)
           })
    },
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      return date;
    }
  },
}
</script>

<style scoped>

  #edit_form {
    border: #2d654e;
    width: 50%;
    margin: 0 auto;
  }

  #edit_form h2{
    width: 100%;
  }


</style>
