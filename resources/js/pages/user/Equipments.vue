<template>
<v-card
    raised
    class="mx-auto"
    width="85%"
    min-height="400"
  >

    <v-toolbar
      color="blue dark-3"
      dark
    >
    <v-card-text>
      <v-toolbar-title>Equipments</v-toolbar-title>

    </v-card-text>
    </v-toolbar>

      <v-container class="p-4">
            <v-data-table
							:headers="headers"
							:items="equips"
							class="elevation-1"

					>
          </v-data-table>
        </v-container>
</v-card>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'Equipment ID',
          align: 'start',
          sortable: true,
          value: 'id',
        },
        { text: 'Name', value: 'name' },
        { text: 'Quantity', value: 'quantity' },

      ],
      equips: []
    }
  },
  created(){
    this.$store.commit('SET_LAYOUT', 'app-layout')
  },
  mounted() {
   this.getEquips()
 },

 methods: {
   getEquips() {
     axios.get(`/admin/lab/${this.$route.params.id}/equipments`)
       .then((res) => {
         this.equips = res.data
       }, () => {
         console.log("error")
       })
   },
 }
}
</script>
