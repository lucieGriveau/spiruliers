<template>
<div class="reseller">
  <h2>Liste des Revendeurs</h2>
  <ul>
    <li>
      <h3>{{ name }}</h3>
    </li>
    <li>{{ description }}</li>
    <li>Ajouté le : {{ created_at.toLocaleString() }}</li>
    <li>Mis à jour le : {{ updated_at.toLocaleString() }}</li>
  </ul>
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>


<script>
export default {
  name: 'Reseller',
  props: {
    name: String,
    description: String,
    latitude: Number,
    longitude: Number,
    created_at: String,
    updated_at: String
  }
}
</script>
