<template>
<div>
  <section>
    <b-field label="Name">
      <b-input value="Kevin Garvey"></b-input>
    </b-field>

    <b-field label="Email"
             type="is-danger"
             message="This email is invalid">
      <b-input type="email"
               value="john@"
               maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Username"
             type="is-success"
             message="This username is available">
      <b-input value="johnsilver" maxlength="30"></b-input>
    </b-field>
  </section>
</div>
</template>

<script>
export default {
  name: "EditSupplier"
}
</script>

<style scoped>

</style>