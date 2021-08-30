<template>
  <section id="edit_form">
    <h1>Update customer</h1>
    <b-field label="First name">
      <b-input :value="dataUpdate.firstName"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Last name">
      <b-input :value="dataUpdate.lastName"
               type="text"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Email">
      <b-input :value="dataUpdate.email"
               type="email"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Adress">
      <b-input :value="dataUpdate.address"
               type="text"
               maxlength="30"></b-input>
    </b-field>

    <b-field label="Postal code">
      <b-input :value="dataUpdate.codePostal"
               type="text"
               maxlength="5"></b-input>
    </b-field>

    <b-field label="City">
      <b-input :value="dataUpdate.city"
               type="text"
               maxlength="30"></b-input>
    </b-field>

    <b-field>
      <router-link to="/customers">
        <b-button type="primary-light">Enregistrer</b-button>
      </router-link>
    </b-field>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "CustomerUpdate",
  props: {
    customer: Object
  },
  data() {
    return {
      dataUpdate: {}
    }
  },
  methods: {
    getData() {
      this.loading = true
      axios
          .get('https://heroku-campus-suppliers.herokuapp.com/api/customers/' + this.$route.params.id)
          .then(response => {
            this.dataUpdate = response.data;
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
    if (this.customer === undefined) {
      //console.log(this.$route.params.id);
      this.getData()
    } else {
      this.dataUpdate = this.customer
    }
  }
}
</script>

<style scoped>

#edit_form {
  border: #2d654e;
}

</style>