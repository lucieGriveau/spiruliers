<template>
  <div>
  <b-table :data="resellers" :columns="columns">
  </b-table>
  </div>
</template>

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

<style scoped>

</style>
