<template>
  <div class="one">
    <h2>{{ reseller.name }}</h2>
    <p>{{ reseller.description }}</p>
    <p>Latitude : {{ reseller.latitude }}°</p>
    <p>Longitude : {{ reseller.longitude }}°</p>
    <p>Supplier associé : {{ reseller.supplier_id }}</p>
    <div class="texts">
      <div class="box">
        <h3>Crée le : </h3>
        <p>{{ reseller.created_at }}</p>
      </div>
      <div class="box">
        <h3>Mis à jour le : </h3>
        <p>{{ reseller.updated_at }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Reseller',
  props: {
    reseller: Object
  }
}
</script>
