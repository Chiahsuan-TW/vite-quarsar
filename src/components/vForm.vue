<script setup>
import { ref } from 'vue';
import { Field, Form } from 'vee-validate';
import QInputComponent from '@/components/QInputComponent.vue';
import * as yup from 'yup';

const inputList = [
  { label: '姓名', name: 'fullname', placeholder: 'Harry Potter' },
  {
    label: '電話',
    name: 'phone',
    placeholder: '02-2334561'
  },
  {
    label: '信箱',
    name: 'email',
    placeholder: 'example@gmail.com'
  }
];

const group = ref(null);

const options = [
  { label: 'female', value: 'female' },
  { label: 'male', value: 'male' },
  { label: 'neutral', value: 'neutral' }
];

const phoneRegex = /^\(?([0-9]{2})\)?[- ]?([0-9]{7})$/;
const schema = yup.object({
  fullname: yup.string().trim().required(),
  phone: yup
    .string()
    .trim()
    .matches(phoneRegex, '電話格式不正確喔!')
    .required(),
  gender: yup.string().required(),
  email: yup.string().email().required()
});

function onSubmit(values, actions) {
  console.log(JSON.stringify(values));
  actions.resetForm();
}
</script>

<template>
  <!--姓名（text）Ｖ
電話（tel）Ｖ
日期（date picker）、時間（time）
性別（radio）
興趣（checkbox）＋可新增自定義選項
標籤輸入並新增
居住地（select）
年齡（number）
email V
password（明碼與密碼切換）
體驗感受（range）
備註（textarea 3行）
大頭貼（可預覽）
submit 跟 reset-->

  <Form :validation-schema="schema" @submit="onSubmit">
    <!-- <Field name="telephone" v-slot="{ errorMessage, value, field }">
      <q-input
        color="primary-12"
        label="電話"
        v-bind="field"
        :model-value="value"
        :error="!!errorMessage"
        :error-message="errorMessage"
      >
        <template v-slot:prepend>
          <q-icon name="phone" color="secondary" />
        </template>
      </q-input>
    </Field>

    <Field name="email" v-slot="{ errorMessage, value, field }">
      <q-input
        color="primary-12"
        label="信箱"
        v-bind="field"
        :model-value="value"
        :error="!!errorMessage"
        :error-message="errorMessage"
      >
        <template v-slot:prepend>
          <q-icon name="email" color="secondary" />
        </template>
      </q-input>
    </Field> -->

    <QInputComponent
      v-for="(input, index) in inputList"
      :key="index"
      :input="input"
    />
    <!--問題1: 不選的時候不能送出但沒有錯誤訊息-->
    <!--問題2: 送出後選項不會清除-->
    <!--option group外層包 q-field -->
    <Field name="gender" v-slot="{ errorMessage, field }">
      <q-field :error="!!errorMessage" :error-message="errorMessage">
        <q-option-group
          inline
          :options="options"
          type="radio"
          v-model="group"
          v-bind="field"
        />
      </q-field>
    </Field>

    <q-btn class="q-mt-md" color="primary" type="submit" label="Submit" />
  </Form>
</template>

<style lang="scss" scoped>
form {
  max-width: 400px;
  margin: 0 auto;
  outline: 1px solid #e0e0e0;
  padding: 10px;
}
</style>
