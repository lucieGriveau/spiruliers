<template>
  <div>
    <div class="card">
      <div class="card-content">

        <div class="media">
          <!--          <div class="media-left">-->
          <!--            <figure class="customer_picture">-->
          <!--              <img src="" alt="Placeholder image">-->
          <!--            </figure>-->
          <!--          </div>-->
          <div class="media-content">
            <h1 class="fist_name">{{ customerData.firstName + ' ' + customerData.lastName }}</h1>
            <p class="subtitle is-6">Email: {{ customerData.email }}</p>
          </div>
        </div>

        <div class="content">
          <a>Adresse:{{ customerData.address + ' ' + customerData.codePostal + ' ' + customerData.city }}</a>
          <p>{{ customerData.phoneNumber }}</p>
        </div>

      </div>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <h1 class="fist_name">Resellers</h1>
          <p class="">Email: {{ customerData.reseller.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Customer",
  props: {
    customer: Object,
  },
  data() {
    return {
      customerData: {}
    }
  },
  methods: {
    getData() {
      this.loading = true
      axios
          .get('https://heroku-campus-suppliers.herokuapp.com/api/customers/' + this.$route.params.id)
          .then(response => {
            this.customerData = response.data;
            // console.log(response.data);
          })
          .catch(error => {
            // console.log(error)
            this.error = error
          })
          .finally(() => {
            this.loading = false;
          })
    }
  },
  mounted() {
    if (this.customer === undefined) {
      //console.log(this.$route.params.id);
      this.getData()
    } else {
      this.customerData = this.customer
    }
  }
}
</script>

<style scoped>

</style>