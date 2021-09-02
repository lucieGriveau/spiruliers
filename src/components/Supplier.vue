<template>
  <div>


    <div class="card">
      <div class="card-content">

        <div class="media">
          <div class="media-left">
<!--            <figure class="customer_picture">-->
<!--              <img src="" alt="Placeholder image">-->
<!--            </figure>-->
          </div>
          <div class="media-content">
            <h1 class="name">{{ info.name}}</h1>
            <h3 class="contact">Contact: 33 4 02154863</h3>
            <h3>spisupplier@ehnois.fr</h3>
            <a class="name">Localisation: {{ info.longitude}}{{ info.latitude}}</a> <br>
            <br>
            <br>
<!--            I hade to change it here from supplier to info to match with the new "parameter??" I gave for the new function for the reloaded page.-->
         <h3> Date d'insertion: {{ info.checkedAt }}</h3>
          <a>{{ info.status}}</a>
          </div>
        </div>

      </div>
    </div>


<div>

</div>
  </div>

</template>

<script>
import axios from "axios"

export default {

  name: "Supplier",
  props: {
    supplier: Object

  },
  data() {
    return {
      info: {}
    }
  },

  mounted() {
    if (this.supplier === undefined) {
      console.log(this.$route.params.id)
      this.supInfo()
    }
    else {
      this.info = this.supplier
     }
    },



  methods: {
    supInfo() {
      this.loading = true;
      axios
          .get('https://heroku-campus-suppliers.herokuapp.com/api/suppliers/' + this.$route.params.id)  // the logic here is that we have to recharge the data of the page we are currently.
          // So that's why we have to pass by a full route, get all the parameters and create a new object with the info, like a new page.
          // The opposite of what we did to show the different pages of SuppliersList.
          .then(response => (console.log(this.info = response.data)))
          .catch(error => console.log(error))
          .finally(() => this.loading = false)
    }
  }

  }

</script>

<style scoped>
</style>