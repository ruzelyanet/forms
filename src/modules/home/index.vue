<template>
  <div class="home">
    <h1 slot="title">{{title}}</h1>

    <b-button @click="logOut">Выйти</b-button>
    
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      title: 'Добро пожаловать!!!',      
    }
  },

  methods: {
    logOut() {
      localStorage.removeItem('token')
      this.$router.replace({name: 'login'})
    }
  }
}
</script>
