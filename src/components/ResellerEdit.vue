<template>
  <section id="edit_form">
    <h1>Edit reseller</h1>
    <b-field label="First name">
      <b-input :value="dataEdit.first_name"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Last name">
      <b-input :value="dataEdit.last_name"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Email">
      <b-input :value="dataEdit.email"
               type="email"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Description">
      <b-input :value="dataEdit.description"
               type="text"
               maxlength="200"></b-input>
    </b-field>

    <b-field>
      <router-link to="/resellers">
        <b-button type="primary-light">Ajouter</b-button>
      </router-link>
    </b-field>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "ResellerEdit",
  props: {
    reseller: Object
  },
  data() {
    return {
      dataEdit: {}
    }
  },
  methods: {
    getData() {
      this.loading = true
      axios
          .post('https://heroku-campus-suppliers.herokuapp.com/api/resellers')
          .then(response => {
            this.dataEdit = response.data;
            // console.log(response.data);
          })
          .catch(error => {
            // console.log(error)
            this.error = error
          })
          .finally(() => {
            this.loading = false;
          })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped>

  #edit_form {
    border: #2d654e;
  }

</style>
