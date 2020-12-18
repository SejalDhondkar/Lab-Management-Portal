<template>
  <v-card
    raised
    class="mx-auto"
    width="85%"
  >

    <v-toolbar
      color="blue dark-3"
      dark
    >
    <v-card-text>
      <v-toolbar-title>Add New Equipment</v-toolbar-title>

    </v-card-text>
    </v-toolbar>
          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="12"
                  md="12"
                >
                  <v-text-field
                    v-model="equip.name"
                    class="purple-input"
                    label="Equipment Name"
                  />
									<v-text-field
                    v-model="equip.quantity"
                    class="purple-input"
                    label="Equipment Quantity"
                  />
                </v-col>

								<v-col
                  cols="6"
                  class="text-left"
                >
                  <v-btn
                    color="primary"
                    class="mr-0"
                    @click="back"
                  >
                    Back
                  </v-btn>
                </v-col>


                <v-col
                  cols="6"
                  class="text-right"
                >
                  <v-btn
                    color="success"
                    class="mr-0"
                    @click="submit"
                  >
                    Save
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>

  </v-card>
</template>

<script>
export default {
data() {
      return {
        equip: {
					name:'',
					quantity: '',
        },
      }
  },

  created(){
    this.$store.commit('SET_LAYOUT', 'app-layout');
  },

  methods: {
    submit() {
			this.errors = {};
			axios.post(`/admin/lab/${this.$route.params.id}/equipment/store`, this.equip).then(response => {
				console.log('Message sent!');
				this.$router.push(`/admin/lab/${this.$route.params.id}/equipments`);
			}).catch(error => {
				if (error.response.status === 422) {
				console.log("error");
				}
			});
		},
	
		back(){
			this.$router.go(-1);	
		}
  },



  }
</script>
