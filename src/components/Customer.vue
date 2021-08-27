<template>
  <div>
    <h1>Client: {{ customer.id }} </h1>
    <h2>Nom: {{ customer.lastname}}</h2>
    <h2>Prénom: {{ customer.firstname }} </h2>
    <h2>Email: {{ customer.email }}</h2>
    <h2>Code postal: {{ customer.postalCode }}</h2>
    <h2>Adresse: {{ customer.address }}</h2>
    <h2>Numéro de téléphone: {{ customer.phoneNumber }}</h2>
  </div>
</template>

<script>
export default {
  name: "Customer",
  props:{
    customer: Object
  }
}
</script>

<style scoped>

</style>