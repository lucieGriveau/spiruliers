<template>
<div>
  <br>
  <h1> Editer la fiche du Fournisseur:</h1>
  <br>
  <b-field label="ID"  >
    <b-input :value="nom"  ></b-input>
      </b-field>

  <b-field label="Nome de l'Intreprise"  >
    <b-input :value="lati"></b-input>
  </b-field>

    <b-field label="Status"  >
      <b-input :value="sta"></b-input>
    </b-field>

  <b-field label="Longitude"  >
    <b-input :value="longi"></b-input>
  </b-field>


  <b-field label="Latitude"  >
    <b-input :value="lati"></b-input>
  </b-field>

  <b-button label="Enregistrer" type="is-primary" />

<!--     <b-field label="Username"-->
<!--             type="is-success"-->
<!--             message="This username is available">-->
<!--      <b-input value="johnsilver" maxlength="30"></b-input>-->
<!--    </b-field>-->

</div>
</template>

<script>
// import Supplier from "./Supplier";
import axios from "axios";

export default {
  name: "EditSupplier",
  data() {
    return {
      loading: false,
      error: null,
    }
  },


  mounted() {
  this.refresh()
  },

  methods: {
    refresh() {
      this.loading = true;
      axios
          .get('https://heroku-campus-suppliers.herokuapp.com/api/suppliers/edit')  // the logic here is that we have to recharge the data of the page we are currently.
          // So that's why we have to pass by a full route, get all the parameters and create a new object with the info, like a new page.
          // The opposite of what we did to show the different pages of SuppliersList.
          .then(response => (console.log(this.info = response.data.data)))
          .catch(error => console.log(error))
          .finally(() => this.loading = false)
    },
  }
}

</script>

<style scoped>

</style>