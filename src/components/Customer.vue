<template>
  <div>
    <h1>Client: </h1>
    <h2>Nom: {{ lastname}}</h2>
    <h2>Prénom: {{ firstname }} </h2>
    <h2>Email: {{ email }}</h2>
    <h2>Code postal: {{ postalCode }}</h2>
    <h2>Adresse: {{ address }}</h2>
    <h2>Numéro de téléphone: {{ phoneNumber }}</h2>
  </div>
</template>

<script>
export default {
  name: "Customer",
  props:{
    firstname: String,
    lastname: String,
    email: String,
    postalCode: Number,
    city: String,
    address: String,
    phoneNumber: String,
    reseller_id: Number,
  }
}
</script>

<style scoped>

</style>