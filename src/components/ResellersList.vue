<template>
  <div class="list">
    <h2>Nos revendeurs</h2>
    <div>
      <router-link class="carte" :to="{ name: 'map', params:{ datas: resellers} }">Voir carte</router-link>
    </div>
    <p v-if="loading">Loading...</p>
    <div class="prev-next">
      <b-button @click="getApi(1)" class="previous" type="primary-light">⬅</b-button>
      <b-button @click="getApi(2)" class="next" type="primary-light">➡</b-button>
    </div>
    <b-table :data="resellers">
      <b-table-column field="id" label="ID" centered numeric v-slot="props">
        {{ props.row.id }}
      </b-table-column>
      <b-table-column field="name" label="Nom" centered v-slot="props">
        {{ props.row.name }}
      </b-table-column>
      <b-table-column field="description" label="Description" centered v-slot="props">
        {{ props.row.description }}
      </b-table-column>
      <b-table-column field="created_at" label="Créé le" centered v-slot="props">
        {{ props.row.created_at }}
      </b-table-column>
      <b-table-column field="updated_at" label="Dernière mise à jour" centered v-slot="props">
        {{ props.row.updated_at }}
      </b-table-column>
      <b-table-column field="action" label="" centered v-slot="props">
        <router-link
            :to="{
          name:'Reseller',
          params:{
            id:props.row.id,
            reseller:props.row,
            }
          }">
          <b-button class="see">Voir</b-button>
        </router-link>
        <router-link
            :to="{
          name:'Reseller',
          params:{
            id:props.row.id,
            reseller:props.row,
            }
          }">
          <b-button class="edit">Editer</b-button>
        </router-link>
        <router-link
            :to="{
          name:'Reseller',
          params:{
            id:props.row.id,
            reseller:props.row,
            }
          }">
          <b-button class="del">Supprimer</b-button>
        </router-link>
      </b-table-column>
    </b-table>
    <div class="prev-next">
      <b-button @click="getApi(1)" class="previous" type="primary-light">⬅</b-button>
      <b-button @click="getApi(2)" class="next" type="primary-light">➡</b-button>
    </div>
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
      currentPage: 1,
      lastPage: 1,
    }
  },
  mounted() {
    this.getApi();
  },
  methods: {
    getApi() {
      this.loading = true;
      axios
          .get('https://heroku-campus-suppliers.herokuapp.com/api/resellers?page=' + this.currentPage)
          .then(response => (this.resellers = response.data.data))
          .catch(error => console.log(error))
          .finally(() => this.loading = false)
    }
  },
  nextPage() {
    this.currentPage += 1
    this.getApi()
  },
  previousPage() {
    this.currentPage -= 1
    this.getApi()
  },
  finalPage(){
    this.currentPage = this.lastPage
    this.getApi()
  },

}
</script>
