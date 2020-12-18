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
      <v-toolbar-title>Edit Lab</v-toolbar-title>

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
                    v-model="lab.name"
                    class="purple-input"
                    label="Lab Name"
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
        lab: {
          name:'',
        },
      }
  },

  created(){
		this.$store.commit('SET_LAYOUT', 'app-layout');
		this.axios.get(`/admin/lab/${this.$route.params.id}/edit`).then((response) => {
            this.lab = response.data;
        });
  },

  methods: {
    submit() {
			this.errors = {};
      axios.put(`/admin/lab/${this.$route.params.id}/update/`, this.lab).then(response => {
        console.log('Message sent!');
        this.$router.push('/admin/labs');
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
