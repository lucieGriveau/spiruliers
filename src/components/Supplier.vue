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
            <h1 class="name">{{ supplier.name}}</h1>
            <h1 class="contact">33 4 02154863 - spisupplier@ehnois.fr</h1>
          </div>
        </div>

        <div class="content">
          <a>Status: {{ supplier.status}}</a>
          <p> {{ supplier.checkedAt }}</p>
        </div>

      </div>
    </div>


<div>

</div>
  </div>

</template>

<script>

export default {

  name: "Supplier",
  props: {
    supplier: Object

  },
  data() {
    return {}
  },

  mounted() {
    if (this.supplier === undefined) {
      console.log(this.$route.params.id)
    }

  }
}
</script>

<style scoped>
</style>