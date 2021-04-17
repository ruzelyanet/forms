<template>
  <div class="page">
     <b-form @submit="submit">
      <b-form-group v-for="(item, key) in fields" :key="key" >
        <captcha
          v-model="form[item.name]"
          :validation="$v.form[item.name]"
          v-if="item.type === 'captcha'"
          :placeholder="item.placeholder" />
      
        <b-form-select
          v-model="form[item.name]"
          :placeholder="item.placeholder"
          :validation="$v.form[item.name]"
          v-else-if="item.type === 'selector'"
          :options="item.options"
          :selected="form[item.name]"
          value-field="code"
          text-field="name">
          <template #first>          
            <b-form-select-option :value="null" disabled>{{ item.placeholder }}</b-form-select-option>
          </template>
        </b-form-select>

        <checkbox
          v-model="form[item.name]"
          :placeholder="item.placeholder"
          :validation="$v.form[item.name]"
          v-else-if="item.type === 'checkbox'" />
        
        <b-form-datepicker v-model="form[item.name]"
          :validation="$v.form[item.name]"
          v-else-if="item.type === 'celender'"
          :placeholder="item.placeholder" />
        
        <file-photo
          class="verification-pas"
          v-model="form[item.name]"
          :img="item.img"
          :placeholder="item.placeholder"
          :validation="$v.form[item.name]"
          v-else-if="item.type === 'pas'" />

        <file-photo
          class="verification-pas"
          v-model="form[item.name]"
          :img="item.img"
          :placeholder="item.placeholder"
          :validation="$v.form[item.name]"
          v-else-if="item.type === 'fest'" />

        <ex-input
          v-model="form[item.name]"
          :validation="$v.form[item.name]"
          :mask="item.mask"
          v-else
          :type="item.type"
          :placeholder="item.placeholder" />        
      </b-form-group>
    
      <slot v-bind:disabled="$v.form.$invalid" name="footer">
        <div class="text-center">
        <b-button
          variant="primary"        
          type="submit"
          :disabled="$v.form.$invalid"
          >Отправить</b-button>
        </div>
      </slot>
     </b-form>
  </div>
</template>

<script>
import Btn from "../components/Btn";

import Privacy from "./Form/Privacy"
import Input from "./Form/Input";
import Captcha from "./Form/Captcha";
import { validationMixin } from "vuelidate";
import Checkbox from "./Form/Checkbox";

export default {
  name: "ExForm",
  mixins: [validationMixin],

  components: {
    "ex-input": Input,
    captcha: Captcha,
    checkbox: Checkbox,
    "v-btn": Btn,
    "file-photo": Privacy
  },

  props: {
    fields: {
      type: Array,
      required: true
    },

    datas: {
      type: Object
    },

    callback: {
      type: Function | Promise
    }
  },

  validations() {
    const form = {};

    for (let i in this.fields) {
      if (this.fields[i].validation) {
        form[this.fields[i].name] = this.fields[i].validation;
      }
    }

    return {
      form,
    };
  },

  data() {
    return {
      form: {},
    };
  },

  methods: {
    async submit() {    
      console.log(this.form)
      await this.callback(this.form)
    },

    formData() {
      const newForm = {}
        
      for(let i in this.fields) {        
        const isSelector = this.fields[i].type === 'selector'

        if(this.datas[this.fields[i].name] || isSelector) {          
          newForm[this.fields[i].name] = this.datas[this.fields[i].name]
        }
      }      
      
      this.form = Object.assign({}, newForm)      
    }

  },

  mounted() {    
    if(this.datas) {
      this.formData()     
    }
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
