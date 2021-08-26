<template>
  <div>
    <!--    <h1>Supplier "fiche"</h1>-->

    <h2>Fournisseur: {{ name  }} </h2>
    <h2>Date d'Insertion: {{ checkedAt}}</h2>
    <h2>Status: {{  status  }} </h2>
    <h2>Latitude: {{latitude.toLocaleString()}}</h2>
    <h2>Longitute: {{longitude.toLocaleString()}}</h2> <br>

  </div>
</template>

<script>
export default {
  name: "Supplier",
  props: {
    name: String,
    checkedAt: String,
    status: String,
    latitude: String,
    longitude: String,
  }
}
</script>

<style scoped>
</style>