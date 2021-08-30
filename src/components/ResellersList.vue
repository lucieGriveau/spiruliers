<template>
<div class="reseller-list">
  <h2>Resellers List</h2>
  <router-link class="carte" :to="{ name: 'map', params:{ datas: resellers} }">Voir carte</router-link>
  <p v-if="loading">Loading...</p>
  <b-table :data="resellers">
    <b-table-column field="id" label="ID" numeric v-slot="props">
      {{ props.row.id }}
    </b-table-column>
    <b-table-column field="name" label="Reseller" numeric v-slot="props">
      {{ props.row.name }}
    </b-table-column>
    <b-table-column field="description" label="Description" numeric v-slot="props">
      {{ props.row.description }}
    </b-table-column>
    <b-table-column field="created_at" label="Créé le" numeric v-slot="props">
      {{ props.row.created_at }}
    </b-table-column>
    <b-table-column field="updated_at" label="Dernière mise à jour" numeric v-slot="props">
      {{ props.row.updated_at }}
    </b-table-column>
    <b-table-column field="action" label="Action" v-slot="props">
      <router-link
          :to="{
          name:'Reseller',
          params:{
            id:props.row.id,
            reseller:props.row,
            }
          }"><b-button type="is-primary">Voir</b-button>
      </router-link>
    </b-table-column>
  </b-table>
</div>
</template>

<style>

h2{
  margin: 0 auto;
  margin-bottom: 50px;
  width: 25%;
  font-size: 25px;
  color: #2d654e;
  border-left: 2px solid #2d654e;
  border-right: 2px solid #2d654e;
}

.table-wrapper{
  margin-top: 50px;
}

.carte {
  color: #000000;
  padding: 10px;
  border: 1px solid #2d654e;
  font-weight: bold;
  transition: 1s;
}

.carte:active {
  color: #ffffff;
  padding: 10px;
  border: 1px solid #000000;
}

.carte:hover {
  color: #ffffff;
  padding: 15px;
  background-color: #2d654e;
}

</style>

<script>
//import Reseller from './Reseller.vue';
import axios from "axios";

export default {
  name: "ResellersList",
  components: {
    //Reseller
  },
  data() {
    return {
      loading: false,
      error: null,
      resellers: [],
    }
  },
  mounted() {
    this.loading = true;
    axios
      .get('https://heroku-campus-suppliers.herokuapp.com/api/resellers')
      .then(response => (this.resellers = response.data.data))
      .catch(error => console.log(error))
      .finally(() => this.loading = false)
  }
}
</script>
