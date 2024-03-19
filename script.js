const { createApp} = Vue;

createApp({
  data() {
    return {
      emailArray: [],
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail'
    }
  },

  methods: {
    getAPI() {
      let newEmail = '';

      axios.get(this.apiUrl)
      .then( resp => {
        newEmail = resp.data.response
        this.emailArray.push(newEmail)
      })
    },

    getAllEmail() {
      for (let i = 0; i < 10; i++) {
        this.getAPI()
      }
    }
  },

}).mount('#app')