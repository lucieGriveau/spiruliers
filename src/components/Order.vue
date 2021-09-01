<template>
  <div>
    <div class="card">
      <div class="card-content">

        <div class="media">
          <!--          <div class="media-left">-->
          <!--            <figure class="order_picture">-->
          <!--              <img src="" alt="Placeholder image">-->
          <!--            </figure>-->
          <!--          </div>-->
          <div class="media-content">
            <h1 class="fist_name">Commande</h1>
            <p class="subtitle is-6">Date: {{ orderData.date }}</p>
          </div>
        </div>

        <div class="content">
          <a>Numéro de la commande: {{ orderData.number }}</a>
          <p>Prix de la commande: {{ orderData.price }} €</p>
        </div>


      </div>
    </div>

    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <h1 class="fist_name">Client</h1>
            <h3>{{ orderData.customer.firstName + ' ' + orderData.customer.lastName }}</h3>
          </div>
        </div>

        <div class="content">
          <p>Adresse:
            {{ orderData.customer.address + ' ' + orderData.customer.codePostal + ' ' + orderData.customer.city }}<br>
            Téléphone: {{ orderData.customer.phoneNumber }}</p>
          <a>Email: {{ orderData.customer.email }}</a><br>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Order",
  props: {
    order: Object,
  },
  data() {
    return {
      orderData: {}
    }
  },
  methods: {
    getData() {
      this.loading = true
      axios
          .get('https://heroku-campus-suppliers.herokuapp.com/api/orders/' + this.$route.params.id)
          .then(response => {
            this.orderData = response.data;
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
    if (this.order === undefined) {
      //console.log(this.$route.params.id);
      this.getData()
    } else {
      this.orderData = this.order
    }
  }
}
</script>

<style scoped>

</style>