<template>
<div>
  <br>
  <h1> Editer la fiche du Fournisseur:</h1>
  <br>
    <b-field label="Nom de l'entreprise">
      <b-input :value="name"></b-input>
      <!-- não funciona esse name -->
    </b-field>

    <b-field label="Email"
             type="is-danger"
             message="This email is invalid">
      <b-input type="email"
               value="john@"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Username"
             type="is-success"
             message="This username is available">
      <b-input value="johnsilver" maxlength="30"></b-input>
    </b-field>

</div>
</template>

<script>
// import Supplier from "./Supplier";
export default {
  name: "EditSupplier",
  components: {
 // Supplier,

  },
}
</script>

<style scoped>

</style>