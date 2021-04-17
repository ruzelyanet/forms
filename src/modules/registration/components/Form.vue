<template>
  <ex-form :fields="fields" :datas="datas" :callback="submit">
    <template v-slot:footer="data">      
      <div class="d-flex">
        <div>
          <b-button type="submit" variant="primary" :disabled="data.disabled">Далее</b-button>
        </div>
        <div class="pl-3">
          <div class="pt-1 mb-1">Я уже зарегистрирован,</div>
          <router-link :to="{name: 'login'}">Войти</router-link>
        </div>
      </div>
    </template>
  </ex-form>
</template>

<script>
import exForm from "@/components/Form.vue";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import countries from "@/const/countries";

/* const valdCaptcha = (value) => {
  console.log(value)
  return false
} */

export default {
  name: 'login-form',

  components: {
    'ex-form': exForm
  },

  data() {
    return {
      fields: [{
          placeholder: "Email адрес",
          type: "text",
          name: "email",
          validation: {
            required,
            email,
          },
        },
        {
          placeholder: "Пароль",
          type: "password",
          name: "password",
          validation: {
            required,
            minLength: minLength(6),
          },
        },
        {
          placeholder: "Повторите пороль",
          type: "password",
          name: "repeatPassword",
          validation: {
            required,
            sameAsPassword: sameAs("password"),
          },
        },
        {
          placeholder: 'Номер телефона начиная с "+"',
          type: "text",
          name: "text",
          mask: "+##(###)### ####",
          validation: {
            required,
          },
        },
        {
          placeholder: "Реферал (ID пригласителя)",
          type: "text",
          name: "id",
          validation: {
            required,
          },
        },
        {
          type: "selector",
          options: countries,
          name: "country",
          placeholder: "Страна",
          validation: {
            required,
          },
        },
        {
          placeholder: "Введите код с картинки",
          type: "captcha",
          name: "captcha",
          validation: {
            required,
            //captcha: valdCaptcha
          },
        },
        
        {
          type: "checkbox",
          placeholder: "Terms of use",
          name: "termofuse",
          grup: "docs",
          validation: {
            required,
          }         
        },

        {
          type: "checkbox",
          placeholder: "Privacy policy",
          name: "privacypolicy",
          grup: "docs",
          validation: {
            required,
          }         
        }],

      datas: {
        country: null
      }
    }
  },

  methods: {

    async submit(data) {
      this.$router.push({name: "login"})
    }

  }
}
</script>
