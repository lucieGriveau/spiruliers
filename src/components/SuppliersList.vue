<template>
<div>

  <h1>Suppliers List</h1>

<!--  <b-table-->
<!--      :data="suppliers"-->
<!--      :columns="columns"-->
<!--      :debounce-search="1000">-->



<!--  <p v-for="supplier in suppliers"-->
<!--            :key="supplier.id"-->
<!--            :supplier="supplier">-->
<!--    <router-link :to="{name: 'Supplier', params: {id: supplier.id, supplier:supplier}}">-->
<!--      {{supplier.name}}</router-link></p>-->
<!--&lt;!&ndash;            selectable&ndash;&gt;-->
<!--&lt;!&ndash;            @select="selected"&ndash;&gt;-->

<!--&lt;!&ndash;    <template slot="actions" slot-scope="">&ndash;&gt;-->
<!--&lt;!&ndash;      <b-button> Edit </b-button>&ndash;&gt;-->
<!--&lt;!&ndash;      <b-button> Delete </b-button>&ndash;&gt;-->
<!--&lt;!&ndash;    </template>&ndash;&gt;-->

<!--  </b-table>-->

<!--  <router-link to="/supplier/:id">Fournisseur</router-link>-->

  <b-table :data="suppliers">
    <b-table-column field="id" label="ID" :td-attrs="columnTdAttrs" numeric v-slot="props">
      {{ props.row.id }}
    </b-table-column>
    <b-table-column field="name" label="Supplier" :td-attrs="columnTdAttrs" numeric v-slot="props">
      {{ props.row.name }}
    </b-table-column>
    <b-table-column field="checkedAt" label="Date d'Insertion" :td-attrs="columnTdAttrs" numeric v-slot="props">
      {{ props.row.checkedAt }}
    </b-table-column>
    <b-table-column field="status" label="Status" :td-attrs="columnTdAttrs" numeric v-slot="props">
      {{ props.row.status }}
    </b-table-column>
    <b-table-column field="action" label="Action" centered="true" v-slot="props">
      <router-link
          :to="{
          name:'Supplier',
          params:{
            id:props.row.id,
            supplier:props.row,
            }
          }"><b-button type="is-primary">Voir</b-button>
      </router-link>
    </b-table-column>
  </b-table>





</div>
</template>

<script>


// import Supplier from "./Supplier";

export default {
  name: "SuppliersList",
  // components: {
  //   Supplier
  // },
  // methods: {
  //   selected() {
  //     this.$router.push({ path: '/supplier/:id'})
  //   }
  // },
data () {
  return {
    suppliers: [
      {
        id: 1,
        name: 'Fourni',
        checkedAt: '26-08-2021',
        status: 'actif',
        latitude: '35°',
        longitude: '45',
        but: <template slot="actions">
          <b-button>Default</b-button>
        </template>
      },
      {
        id: 2,
        name: 'Super Spi',
        checkedAt: '26-08-2021',
        status: 'actif',
        latitude: '35°',
        longitude: '45',
      },
      {
        id: 3,
        name: 'Web Spi',
        checkedAt: '26-08-2021',
        status: 'actif',
        latitude: '35°',
        longitude: '45',
      },


    ],
    columns: [
      {
        field: 'id',
        label: 'ID',
        width: '100',
        numeric: true,
        searchable: true,
        centered: true
      },

      {
        field: 'name',
        label: 'Supplier',
        searchable: true,
        centered: true,
        selectable: true,
      },
      {
        field: 'checkedAt',
        label: "Date d'Insertion",
        // searchable: true,
        centered: true
      },

      {
        field: 'status',
        label: 'Status',
        centered: true
      },
      // {
      //   field: 'but',
      //   label: 'Plus',
      //   centered: true,
      //
      // },
    ]



  }
}
}
</script>

<style scoped>

</style>
