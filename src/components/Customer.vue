<template>
  <div>
    <div class="card">
      <div class="card-content">

        <div class="media">
          <div class="media-left">
            <figure class="customer_picture">
              <img src="" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <h1 class="fist_name">{{ customer.firstname + ' ' + customer.lastname }}</h1>
            <p class="subtitle is-6">Email: {{ customer.email }}</p>
          </div>
        </div>

        <div class="content">
          <a>Adresse:{{ customer.address + ' ' + customer.postalCode + ' ' + customer.city }}</a>
          <p> {{ customer.phoneNumber }}</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Customer",
  props:{
    customer: Object,
  },
  data(){
    return {

    }
  }

}
</script>

<style scoped>

</style>