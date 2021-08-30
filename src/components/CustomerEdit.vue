<template>
  <section id="edit_form">
    <b-field label="First name">
      <b-input type="text"
               value=""
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Last name">
      <b-input type="text"
               value=""
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Email">
      <b-input type="email"
               value=""
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Adress">
      <b-input type="text"
               value=""
               maxlength="30"></b-input>
    </b-field>

    <b-field label="Postal code">
      <b-input type="text"
               value=""
               maxlength="5"></b-input>
    </b-field>

    <b-field label="City">
      <b-input type="text"
               value=""
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
export default {
  name: "CustomerEdit",
  props: {
    customer: Object
  }
}
</script>

<style scoped>

  b-field{

  }

  #edit_form {
    border: #2d654e;
  }

</style>