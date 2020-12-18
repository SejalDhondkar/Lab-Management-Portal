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
      <v-toolbar-title>Labs</v-toolbar-title>

    </v-card-text>
    </v-toolbar>

        <v-container class="p-2">
            <v-data-table
							:headers="headers"
							:items="labs"
							class="elevation-1"

					>
            <template v-slot:[`item.actions`]="{ item }">
              <v-btn class="ma-2" color="green dark-3" dark @click="view(item)" >View</v-btn>
            </template>
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
          text: 'Lab ID',
          align: 'start',
          sortable: true,
          value: 'id',
        },
        { text: 'Name', value: 'name' },
        { text: 'Actions', value: 'actions', sortable: false },

      ],
      labs: []
    }
  },
  created(){
    this.$store.commit('SET_LAYOUT', 'app-layout')
  },
  mounted() {
   this.getLabs()
 },

 methods: {
   getLabs() {
     axios.get('/admin/labs')
       .then((res) => {
         this.labs = res.data
       }, () => {
         console.log("error")
       })
   },
   view(item) {
     this.$router.push(`/lab/${item.id}/equipments`)
   }
 }
}
</script>
