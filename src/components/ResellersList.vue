<template>
<div class="list">
  <h2>Liste des revendeurs</h2>
  <div class="bouton-carte">
    <router-link class="carte" :to="{ name: 'map', params:{ datas: resellers} }">Voir carte</router-link>
    <router-link class="carte" :to="{ name:'addReseller', params:{ id:resellers.id, reseller:resellers }}">Ajouter un revendeur</router-link>
  </div>

  <div class="prev-next">
    <b-button @click="previousPage" v-show="currentPage-1>0" class="previous">⬅</b-button>
    <b-button @click="nextPage" v-show="currentPage+1<=lastPage" class="next">➡</b-button>
  </div>

  <p v-if="loading">Loading...</p>

  <b-table :data="resellers">
    <b-table-column field="id" label="ID" sortable numeric v-slot="props">
      {{ props.row.id }}
    </b-table-column>
    <b-table-column field="name" label="Revendeur" numeric v-slot="props">
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
    <b-table-column field="action" label="" v-slot="props">
      <router-link :to="{
          name:'Reseller',
          params:{
            id:props.row.id,
            reseller:props.row,
            }
          }">
        <b-button class="see">Voir</b-button>
      </router-link>
      <router-link :to="{
          name:'ResellerUpdate',
          params:{
            id:props.row.id,
            reseller:props.row,
            }
          }">
        <b-button class="edit">Editer</b-button>
      </router-link>
      <b-button class="del" @click="deleteID(props.row.id)">Supprimer</b-button>
    </b-table-column>
  </b-table>

  <div class="prev-next">
    <b-button @click="previousPage" v-show="currentPage-1>0" class="previous">⬅</b-button>
    <b-button @click="nextPage" v-show="currentPage+1<=lastPage" class="next">➡</b-button>
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
      resellers: [],
      loading: false,
      error: null,
      currentPage: 1,
      lastPage: 1
    }
  },
  methods: {
    getData() {
      this.loading = true;
      axios
        .get('https://heroku-campus-suppliers.herokuapp.com/api/resellers?page=' + this.currentPage)
        .then(response => {
          this.resellers = response.data.data;
          this.lastPage = response.data.last_page;
        })
        .catch(error => {
          this.error = error;
        })
        .finally(() => {
          this.loading = false;
        })
    },
    nextPage() {
      this.currentPage += 1;
      this.getData();
    },
    previousPage() {
      this.currentPage -= 1;
      this.getData();
    },
    deleteID(id) {
      axios
        .delete('https://heroku-campus-suppliers.herokuapp.com/api/resellers/' + id)
      this.getData()
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
