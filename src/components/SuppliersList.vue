<template>
  <div class="list">

    <h2>Nos Fournisseurs</h2>

    <div class="bouton-carte">
      <router-link class="carte" :to="{ name: 'map', params:{ datas: suppliers} }">Voir carte</router-link>
    </div>

    <div class="prev-next">
      <b-button type="primary-light" @click="pages(1)" class="previous">⬅</b-button>
      <b-button type="primary-light" @click="pages(2)" class="next">➡</b-button>
    </div>

    <p v-if="loading">Loading...</p>

    <b-table


        :data="suppliers">
      <!--:checkedAt="date">-->

    <b-table-column field="id" label="ID" centered numeric v-slot="props">
      {{ props.row.id }}
    </b-table-column>
    <b-table-column field="name" label="Supplier" centered numeric v-slot="props" >
      {{ props.row.name }}
    </b-table-column>
    <b-table-column field="checkedAt" label="Date d'Insertion" centered numeric v-slot="props" :value="formatDate()" >
<!--      {{ date}}-->
      {{ props.row.checkedAt}}
    </b-table-column>
    <b-table-column field="status" label="Stock" numeric centered v-slot="props" >
      {{ props.row.status === true? "Oui" : "Non" }}
    </b-table-column>

    <b-table-column field="action" label="" v-slot="props">
      <router-link
          :to="{
          name:'Supplier',
          params:{
            id:props.row.id,
            supplier:props.row,
            }
          }">
          <b-button type="is-success is-light">Voir</b-button>
      </router-link>

      <router-link
          :to="{
          name:'EditSupplier',
          params:{
            // id:props.row.id,
            supplier:props.row,
            }
          }">
          <b-button type="is-warning is-light ">Editer</b-button>
        </router-link>
      </b-table-column>

      <b-table-column field="action" label="">

        <b-button type="is-primary">Supprimer</b-button>

      </b-table-column>


    </b-table>
    <b-button type="primary-light" @click="pages(1)">Previous</b-button>
    <b-button type="primary-light" @click="pages(2)">Next</b-button>

    <br>
    <br>




  </div>
</template>

<script>
import moment from 'moment';
import axios from "axios";


export default {
  name: "SuppliersList",
  moment,
  // format,
  props: {
  },
  data() {
    return {
      loading: false,
      error: null,

      suppliers: [],
    }
    // columns: [
    //   {
    //     field: 'id',
    //     label: 'ID',
    //     width: '100',
    //     numeric: true,
    //     searchable: true,
    //     centered: true
    //   },
    //
    //   {
    //     field: 'name',
    //     label: 'Supplier',
    //     searchable: true,
    //     centered: true,
    //     selectable: true,
    //   },
    //   {
    //     field: 'checkedAt',
    //     label: "Date d'Insertion",
    //     // searchable: true,
    //     centered: true,
    //
    //   },
    //
    //   {
    //     field: 'status',
    //     label: 'Status',
    //     centered: true
    //   },
    // ],
    // }

  },
  // computed: { //para poder atualizar a data de atualização a cada refresh
  //   date () {
  //     return format(this.checkedAt, 'en_US');
  //   },
  // },


  mounted() {

    this.pages()
    // //   this.Page2()
  },

  methods: {
    pages(page) {
      this.loading = true;
      axios
          .get('https://heroku-campus-suppliers.herokuapp.com/api/suppliers?page=' + page)
          .then(response => (console.log(this.suppliers = response.data.data)))
          .catch(error => console.log(error))
          .finally(() => this.loading = false)
    },

    formatDate(date) {
      return moment(date).format('dd.mm.YYYY');
    }


  }

}


</script>


<style scoped>
.button.is-primary {
  background-color: #2d654e;
}

.button.primary-light {
  background-color: #2d654e;
  color: #fff
}
</style>
