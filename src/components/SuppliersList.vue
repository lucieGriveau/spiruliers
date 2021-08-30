<template>
<div>

<!--  <h1>Suppliers List</h1>-->

 <b-table


:data="suppliers">
   <!-- :current-page.sync="page"-->
<!--           :paginated="isPaginated"-->
<!--           :per-page="perPage"-->
<!--           :current-page.sync="currentPage"-->
<!--           :next-page.sync="Page2"-->
<!--           :pagination-simple="isPaginationSimple"-->
<!--           :pagination-position="paginationPosition"-->
<!--           :default-sort-direction="defaultSortDirection"-->
<!--           :pagination-rounded="isPaginationRounded"-->
<!--           :sort-icon="sortIcon"-->
<!--           :sort-icon-size="sortIconSize"-->
<!--           default-sort="user.first_name"-->
<!--           aria-next-label="Next page"-->
<!--           aria-previous-label="Previous page"-->
<!--           aria-page-label="Page"-->
<!--           aria-current-label="Current page">-->



    <b-table-column field="id" label="ID" numeric v-slot="props">
      {{ props.row.id }}
    </b-table-column>
    <b-table-column field="name" label="Supplier" numeric v-slot="props" >
      {{ props.row.name }}
    </b-table-column>
    <b-table-column field="checkedAt" label="Date d'Insertion"  numeric v-slot="props">
      {{ props.row.checkedAt }}
    </b-table-column>
    <b-table-column field="status" label="Status" numeric v-slot="props" >
      {{ props.row.status }}
    </b-table-column>
<!--    <b-table-column field="latitude" label="Latitude" numeric v-slot="props">-->
<!--      {{ props.row.latitude }}-->
<!--    </b-table-column>-->
    <b-table-column field="action" label="" v-slot="props">
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

      <b-table-column field="action" label="" v-slot="props">
      <router-link
          :to="{
          name:'EditSupplier',
          params:{
            id:props.row.id,
            supplier:props.row,
            }
          }"><b-button type="is-primary" @click="onClick(editItem, rowData)">Edit</b-button>
      </router-link>
    </b-table-column>

    <b-table-column field="action" label="" >

         <b-button type="is-primary" @click="onClick(deleteItem, rowData)">Supprimer</b-button>

    </b-table-column>


<!--    <b-table-column @click.native="del(props.row)">-->
<!--      <button class="button is-small is-light">-->
<!--        <b-icon icon="edit" size="is-small"></b-icon>-->
<!--      </button>-->
<!--      <button class="button is-small is-danger">-->
<!--        <b-icon icon="delete" size="is-small"></b-icon>-->
<!--      </button>-->
<!--    </b-table-column>-->


  </b-table>
  <b-button type="primary-light" @click="pages(1)">Previous</b-button>
  <b-button type="primary-light" @click="pages(2)">Next</b-button>

<br>
  <br>

  <router-link :to="{ name: 'map', params:{ datas: suppliers} }">Voir carte</router-link>






</div>
</template>

<script>
import axios from "axios";

// import Supplier from "./Supplier";

export default {
  name: "SuppliersList",
  data() {
    return {
      loading: false,
      error: null,

      suppliers: [
        // {
        //   id: 1,
        //   name: 'Fourni',
        //   checkedAt: '',
        //   status: 'actif',
        //   latitude: '35°',
        //   longitude: '45',
        // },
        // {
        //   id: 2,
        //   name: 'Super Spi',
        //   checkedAt: '',
        //   status: 'actif',
        //   latitude: '35°',
        //   longitude: '45',
        // },
        // {
        //   id: 3,
        //   name: 'Web Spi',
        //   checkedAt: '',
        //   status: 'actif',
        //   latitude: '35°',
        //   longitude: '45',
        // },


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
      ],

      // isPaginated: true,
      // isPaginationSimple: false,
      // isPaginationRounded: false,
      // paginationPosition: 'bottom',
      // defaultSortDirection: 'asc',
      // sortIcon: 'arrow-up',
      // sortIconSize: 'is-small',
      // currentPage: 1,
      // Page2() {
      //   this.loading = true;
      //   axios
      //       .get('http://heroku-campus-suppliers.herokuapp.com/api/suppliers?page=2')
      //       .then(response => (this.suppliers = response.data.data))
      //       .catch(error => console.log(error))
      //       .finally(() => this.loading = false)
      //
      // },
      // perPage: 10



    }

  },
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

    // Page2() {
    //   this.loading = true;
    //   axios
    //       .get('http://heroku-campus-suppliers.herokuapp.com/api/suppliers?page=2')
    //       .then(response => (this.suppliers = response.data.data))
    //       .catch(error => console.log(error))
    //       .finally(() => this.loading = false)
    // },
  }


  // props: {
  //   rowData: {
  //     type: Object,
  //     required: true
  //   }
  // },
  // methods: {
  //   // eslint-disable-next-line no-undef
  //   ...mapActions([
  //     'notification'
  //   ]),
  //   onClick: function(action, data) {
  //     if (action === 'editItem') {
  //       this.$router.push({ path: this.$route.path + '/'+data.id+'/edit' })
  //     }
  //
  //     if (action === 'deleteItem') {
  //       if (confirm('Are you sure to delete this Supplier')) {
  //         this.$http.delete(process.env.API_URL + '/api/' + this.$route.path +  '/' + data.id).then(function(response) {
  //           this.notification(response.data)
  //               // eslint-disable-next-line no-undef
  //           .delete(this.$parent.SuppliersList, index)
  //         })
  //       }
  //
  //     }
  //
  //   },
  // }

}


</script>

<style scoped>

</style>
