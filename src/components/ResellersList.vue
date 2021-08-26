<template>
<div>
  <b-table :data="resellers" :columns="columns">
    <Reseller v-for="reseller in resellers" :key="reseller.id" :name="reseller.name" :description="reseller.description" :created_at="reseller.created_at" :updated_at="reseller.updated_at" />
  </b-table>
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
      resellers: [{

          id: 1,
          name: "Heath Mayert",
          description: "Dolorem recusandae autem officiis autem fugit quisquam aut. Deserunt placeat sapiente illum voluptate delectus.",
          latitude: 26.720245,
          longitude: -173.967772,
          supplier_id: 1,
          created_at: "1993-06-12 19:56:09",
          updated_at: "1979-12-03 06:37:10"
        },
        {
          id: 2,
          name: "Rhea Steuber",
          description: "Tenetur natus libero dolores tempora.",
          latitude: 15.845808,
          longitude: -42.065633,
          supplier_id: 1,
          created_at: "1971-04-27 23:23:34",
          updated_at: "1994-12-25 19:58:15"
        },
        {
          id: 3,
          name: "Lyda Barton MD",
          description: "Laudantium ipsam corrupti cupiditate fugiat eos. Laboriosam qui maiores distinctio praesentium ut culpa.",
          latitude: 72.478383,
          longitude: -124.662174,
          supplier_id: 1,
          created_at: "1995-09-06 09:10:40",
          updated_at: "2010-11-26 14:56:28"
        }
      ],
      columns: [{
          field: 'id',
          label: 'ID',
          width: '40',
          numeric: true
        },
        {
          field: 'name',
          label: 'Nom',
        },
        {
          field: 'description',
          label: 'Description',
        },
        {
          field: 'created_at',
          label: 'Date de création',
          centered: true
        },
        {
          field: 'updated_at',
          label: 'Date de mise à jour',
          centered: true
        }
      ]

    }
  }
}

</script>


<style scoped>

</style>
