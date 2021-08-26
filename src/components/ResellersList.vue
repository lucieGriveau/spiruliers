<template>
<div>
  <Reseller v-for="reseller in resellers" :key="reseller.id" :name="reseller.name" :description="reseller.description" :created_at="reseller.created_at" :updated_at="reseller.updated_at" />
</div>
</template>

<script>

import Reseller from './Reseller.vue';

export default{
  name: "ResellersList",
  components: {
    Reseller
  },
  data() {
    return {
      resellers [{
            id:3,
            name:"Heath Mayert",
            description:"Dolorem recusandae autem officiis autem fugit quisquam aut. Deserunt placeat sapiente illum voluptate delectus.",
            latitude:26.720245,
            longitude:-173.967772,
            supplier_id:1,
            created_at:"1993-06-12T19:56:09.000000Z",
            updated_at:"1979-12-03T06:37:10.000000Z"
         },
         {
            id:24,
            name:"Rhea Steuber",
            description:"Tenetur natus libero dolores tempora.",
            latitude:15.845808,
            longitude:-42.065633,
            supplier_id:1,
            created_at:"1971-04-27T23:23:34.000000Z",
            updated_at:"1994-12-25T19:58:15.000000Z"
         },
         {
            id:45,
            name:"Lyda Barton MD",
            description:"Laudantium ipsam corrupti cupiditate fugiat eos. Laboriosam qui maiores distinctio praesentium ut culpa.",
            latitude:72.478383,
            longitude:-124.662174,
            supplier_id:1,
            created_at:"1995-09-06T09:10:40.000000Z",
            updated_at:"2010-11-26T14:56:28.000000Z"
         }
       ]
    }
  }
}

</script>
=======
  <div>

  </div>
</template>

<script>
export default {
  name: "ResellersList.vue"
}
</script>

<style scoped>

</style>
