<template>
  <div class="list">
    <h2>Nos commandes</h2>

    <div class="bouton-carte">
      <router-link class="carte"
                   :to="{
              name:'AddOrder',
              params:{
                id:orders.id,
                order:orders,
              }
            }">
        Passer une commande
      </router-link>
    </div>

    <div class="prev-next">
      <b-button class="previous" type="is-success is-light" @click="previousPage" v-show="currentPage-1>0">⬅</b-button>
      <b-button class="next" type="is-success is-light" @click="nextPage" v-show="currentPage+1<=lastPage">➡</b-button>
    </div>

    <p v-if="loading">Loading...</p>

    <b-table :data="orders">
      <b-table-column field="id" label="ID" centered numeric sortable v-slot="props">
        {{ props.row.id }}
      </b-table-column>
      <b-table-column field="date" label="Date de commande" centered sortable v-slot="props">
        {{ props.row.date }}
      </b-table-column>
      <b-table-column field="number" label="Numéro de commande" centered v-slot="props">
        {{ props.row.number }}
      </b-table-column>
      <b-table-column field="action" label="" centered v-slot="props">
        <router-link
            :to="{
              name:'Order',
              params:{
                id:props.row.id,
                order:props.row,
              }
            }">
          <b-button type="is-success is-light">Voir</b-button>
        </router-link>
        <router-link
            :to="{
              name:'UpdateOrder',
              params:{
                id:props.row.id,
                order:props.row,
               }
            }">
          <b-button type="is-warning is-light">Editer</b-button>
        </router-link>

        <b-button type="is-danger is-light" @click="deleteID(props.row.id)">Supprimer</b-button>

      </b-table-column>
    </b-table><br>

    <div>
      <b-button type="is-success is-light" @click="previousPage" v-show="currentPage-1>0">Précédent</b-button>
      <b-button type="is-success is-light" @click="nextPage" v-show="currentPage+1<=lastPage">Suivant</b-button>
      <!--      <b-button type="primary-light" @click="finalPage" v-show="lastPage">Dernière page</b-button>-->
    </div>
<br>
  </div>

</template>

<script>
//import Order from "./Order.vue";
import axios from "axios"

export default {
  name: "OrdersList",
  components: {
    //Order
  },
  props: {
    order: Object
  },
  data() {
    return {
      orders: [],
      loading: false,
      error: null,
      currentPage: 1,
      lastPage: 1,
    }
  },
  methods: {
    getData() {
      this.loading = true
      axios
          .get('https://heroku-campus-suppliers.herokuapp.com/api/orders?page=' + this.currentPage)
          .then(response => {
            this.orders = response.data.data;
            this.lastPage = response.data.last_page;
            // console.log(this.orders);
            // console.log(response);
            // console.log(response.data);
            // console.log(response.data);
          })
          .catch(error => {
            // console.log(error)
            this.error = error
          })
          .finally(() => {
            this.loading = false
          })
    },
    nextPage() {
      this.currentPage += 1
      this.getData()
    },
    previousPage() {
      this.currentPage -= 1
      this.getData()
    },
    finalPage() {
      this.currentPage = this.lastPage
      this.getData()
    },
    deleteID(id) {
      // console.log(id)
      axios
          .delete('https://heroku-campus-suppliers.herokuapp.com/api/orders/' + id)
      this.getData()
    },
  },
  mounted() {
    this.getData()
  }
}

</script>

<style scoped>

</style>