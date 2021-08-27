<template>
  <div>
    <h1>Customers list</h1><br>
    <b-table :data="customers">
      <b-table-column field="id" label="ID" :td-attrs="columnTdAttrs" centered="true" width="40" numeric v-slot="props">
        {{ props.row.id }}
      </b-table-column>
      <b-table-column field="firstname" label="First name" :td-attrs="columnTdAttrs" centered="true" v-slot="props">
        {{ props.row.firstname }}
      </b-table-column>
      <b-table-column field="lastname" label="Last name" :td-attrs="columnTdAttrs" centered="true" v-slot="props">
        {{ props.row.lastname }}
      </b-table-column>
      <b-table-column field="action" label="Action" centered="true" v-slot="props">
        <router-link
            :to="{
              name:'Customer',
              params:{
                id:props.row.id,
                customer:props.row,
              }
            }">
          <b-button type="is-primary">Voir</b-button>
        </router-link>
      </b-table-column>
    </b-table>
  </div>
</template>

<script>
//import Customer from "./Customer.vue";

export default {
  name: "CustomersList",
  components: {
    //Customer
  },
  data() {
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