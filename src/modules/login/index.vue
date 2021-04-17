<template>
  <div class="container">
    <b-row class="justify-content-center">
      <b-col lg="6">
        <h3 class="text-center">Вход</h3>
        
        <div class="mb-4">
          <form-login />
        </div>

        <div class="text-center mb-4">
          <router-link :to="{name: 'reg'}">Регистрация</router-link>
        </div>
        <div class="text-center">
          <router-link to="/">Забыли пароль?</router-link>
        </div>
      </b-col>
    </b-row> 
  </div>
</template>
<script>
import Form from './components/Form'

export default {
  name: 'auth',
  
  components: {
    "form-login": Form
  }
}
</script>
