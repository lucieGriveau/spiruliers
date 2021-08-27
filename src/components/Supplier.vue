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
            <h1 class="name">{{ supplier.firstname}}</h1>
            <p class="subtitle is-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris.</p>
            <h1 class="contact">33 4 02154863 - spirufly@ehnois.fr</h1>
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
  data () {
    return {
}
  }}
</script>

<style scoped>
</style>