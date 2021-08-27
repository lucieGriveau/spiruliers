<template>
  <div>
    <b-table :data="customer" :columns="columns" >
    <!--<h2>Email: {{ customer.email }}</h2>
    <h2>Code postal: {{ customer.postalCode }}</h2>
    <h2>Adresse: {{ customer.address }}</h2>
    <h2>Numéro de téléphone: {{ customer.phoneNumber }}</h2>-->
    </b-table>
  </div>
</template>

<script>
export default {
  name: "Customer",
  props:{
    customer: Object
  },
  columns: [
        {
          field: 'customer.email',
          label: 'Email',
          centered: true
        },
        {
          field: 'customer.postalCode',
          label: 'Postal code',
          centered: true
        },
        {
          field: 'customer.address',
          label: 'Adress',
          centered: true
        },
        {
          field: 'customer.phoneNumber',
          label: 'Phone number',
          centered: true
        },
  ]
}
</script>

<style scoped>

</style>