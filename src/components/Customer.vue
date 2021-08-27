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
            <h1 class="fist_name">{{ test.firstName + ' ' + test.lastName }}</h1>
            <p class="subtitle is-6">Email: {{ test.email }}</p>
          </div>
        </div>

        <div class="content">
          <a>Adresse:{{ test.address + ' ' + test.postalCode + ' ' + test.city }}</a>
          <p>{{ test.phoneNumber }}</p>
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
      test: {}
    }
  },
  methods: {
    getData() {
      this.loading = true
      axios
          .get('https://heroku-campus-suppliers.herokuapp.com/api/customers/' + this.$route.params.id)
          .then(response => {
            this.test = response.data;
            // console.log(response.data.data);
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
      console.log(this.$route.params.id);
      this.getData()
    } else {
      this.test = this.customer
    }
  }
}
</script>

<style scoped>

</style>