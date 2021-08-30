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
          }"><b-button class="see">Voir</b-button>
      </router-link>
      <router-link
          :to="{
          name:'Reseller',
          params:{
            id:props.row.id,
            reseller:props.row,
            }
          }"><b-button class="edit">Editer</b-button>
      </router-link>
      <router-link
          :to="{
          name:'Reseller',
          params:{
            id:props.row.id,
            reseller:props.row,
            }
          }"><b-button class="del">Supprimer</b-button>
      </router-link>
    </b-table-column>
  </b-table>
</div>
</template>

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
