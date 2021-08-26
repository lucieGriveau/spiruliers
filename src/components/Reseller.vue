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

/* List */
ul {
  counter-increment: index;
  padding: 0;
  max-width: 300px;
}

/* List element */
li {
  display: flex;
  align-items: center;
  padding: 12px 0;
  box-sizing: border-box;
}

/* Element counter */
ul::before {
  content: counters(index, ".", decimal-leading-zero);
  font-size: 1.5rem;
  text-align: right;
  font-weight: bold;
  min-width: 50px;
  padding-right: 12px;
  font-variant-numeric: tabular-nums;
  align-self: flex-start;
  background-image: linear-gradient(to bottom, aquamarine, orangered);
  background-attachment: fixed;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}


/* Element separation */
li + li {
  border-top: 1px solid rgba(255,255,255,0.2);
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
