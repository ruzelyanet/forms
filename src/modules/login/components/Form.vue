<template>
  <ex-form :fields="fields" :callback="submit">
    <template v-slot:footer="data">      
      <div class="text-center">
        <b-button type="submit" variant="primary" :disabled="data.disabled">Вход</b-button>
      </div>
    </template>  
  </ex-form>
</template>

<script>
import exForm from "@/components/Form.vue";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: 'login-form',

  components: {
    'ex-form': exForm
  },

  data() {
    return {
      fields: [{
        placeholder: "E-mail",
        type: "text",
        name: "email",
        validation: {
          required,
          email,
        },
      }, {
        placeholder: "Пароль",
        type: "password",
        name: "pass",
        validation: {
          required          
        },
      }, {
        placeholder: "Введите код с картинки",
        type: "captcha",
        name: "captcha",
        validation: {
          required,
          // captcha: valdCaptcha
        },
      }]
    }
  },

  methods: {
    async submit(data) {
      localStorage.setItem('token', true)

      this.$router.push({name: 'home'})
    }
  }
}
</script>
