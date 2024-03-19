const { createApp} = Vue;

createApp({
  data() {
    return {
      emailArray: [],
      maxEmails: 10,
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
      this.emailArray = [];

      for (let i = 0; i < this.maxEmails; i++) {
        this.getAPI()
      }
    },

    loadingScreen() {
      document.getElementById('loading').classList.remove('d-none')
    }
  },

}).mount('#app')