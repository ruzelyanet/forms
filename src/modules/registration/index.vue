<template>
  <div class="container">
    <b-row class="justify-content-center">
      <b-col lg="6">
        <h3 class="text-center">Регистрация</h3>

        <div class="mb-4">
          <form-login />
        </div>

      </b-col>
    </b-row> 
  </div>
</template>
<script>
import Form from './components/Form'

export default {
  name: 'reg',
  
  components: {
    "form-login": Form
  }
}
</script>
