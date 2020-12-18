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

        <v-container class="p-2">
        
        <v-row>
            <v-col cols="12"
              class="text-right mb-2">
              <br>
              <v-btn
              color="primary"
              @click="newequip"
              >
              Add New Equipment
              </v-btn>
            </v-col>
          </v-row>
            <v-data-table
							:headers="headers"
							:items="equips"
							class="elevation-1"

					>
            <template v-slot:[`item.actions`]="{ item }">
              <v-btn class="ma-2" color="blue dark-3" dark @click="edit(item)" >Edit</v-btn>
            </template>
          </v-data-table>
          <v-row>
            <v-col cols="12"
              class="text-left mb-2">
              <v-btn
              color="primary"
              @click="back"
              >
              Back
              </v-btn>
            </v-col>
          </v-row>
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
        { text: 'Actions', value: 'actions', sortable: false },

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
   newequip() {
    this.$router.push(`/admin/lab/${this.$route.params.id}/equipment/store`);
   },
   edit(item){
     this.$router.push(`/admin/equipment/${item.id}/edit`);
   },
   back(){
     this.$router.push(`/admin/labs`);

   }
 }
}
</script>
