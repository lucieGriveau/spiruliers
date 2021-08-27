<template>
  <div>
    <b-table :data="customers" :columns="columns"> <!--:debounce-search="1000"-->
      <Customer
          v-for="customer in customers"
          :key="customer.id"
          :customer="customer"
      />
      <router-link to="/customer">Customer
      </router-link>
    </b-table>
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
      columns: [{
          field: 'id',
          label: 'Customer',
          width: '40',
          numeric: true,
          centered: true
        },
        {
          field: 'lastname',
          label: 'Last name',
          //searchable: true,
          centered: true
        },
        {
          field: 'firstname',
          label: 'First name',
          //searchable: true,
          centered: true
        },
        {
          field: '',
          label: 'Show more',
          centered: true
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>