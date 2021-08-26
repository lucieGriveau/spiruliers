<template>
<div class="reseller">
  <!-- <ul>
    <li>
      <span>{{ id }}</span><h3>{{ name }}</h3>
    </li>
    <li>{{ description }}</li>
    <li>Ajouté le : {{ created_at.toLocaleString() }}</li>
    <li>Mis à jour le : {{ updated_at.toLocaleString() }}</li>
  </ul> -->
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

</style>


<script>

export default {
  name: 'Reseller',
  props: {
    id: Number,
    name: String,
    description: String,
    latitude: Number,
    longitude: Number,
    created_at: String,
    updated_at: String
  }
}
</script>
