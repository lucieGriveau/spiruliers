<template>
  <div>
    <Customer
        v-for="customer in customers"
        :key="customer.id"
        :customer="customer"
    />
  </div>
</template>

<script>
import Customer from "./Customer.vue";

export default {
  name: "CustomersList",
  components: {
    Customer
  },
  data(){
    return {
      customers: [
        {
          id: 1,
          firstname: 'Gabriella',
          lastname: 'Marins',
          email: 'gabriella.marinsesilva@le-campus-numerique.fr',
          postalCode: 38100,
          city: 'Grenoble',
          address: 'Somewhere over the rainbow',
          phoneNumber: '06',
          reseller_id: 1,
        },
        {
          id: 2,
          firstname: 'Baptiste',
          lastname: 'Martin',
          email: 'baptiste.martin@le-campus-numerique.fr',
          postalCode: 38100,
          city: 'Grenoble',
          address: 'Somewhere close to the market',
          phoneNumber: '06',
          reseller_id: 2,
        },
        {
          id: 3,
          firstname: 'Lucie',
          lastname: 'Griveau',
          email: 'lucie.griveau@le-campus-numerique.fr',
          postalCode: 38100,
          city: 'Grenoble',
          address: 'Chez Laura Troussicot',
          phoneNumber: '06',
          reseller_id: 3,
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>