<script setup>
import { ref } from 'vue';
import { Field, Form } from 'vee-validate';
import * as yup from 'yup';

// 純 Qarsar 要記錄輸入值
// const name = ref('');
// const tel = ref('');
// const gender = ref('');

const group = ref(null);

const options = [
  { label: 'female', value: 'female' },
  { label: 'male', value: 'male' },
  { label: 'neutral', value: 'neutral' }
];

const phoneRegex = /^\(?([0-9]{2})\)?[- ]?([0-9]{7})$/;
const schema = yup.object({
  fullname: yup.string().trim().required(),
  telephone: yup
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

// const initialValues = {
//   terms: false
// };
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

  <!--只用Quasar，沒有驗證功能-->
  <!-- <div class="q-pa-md" style="max-width: 400px">
    <q-form>
      <q-input outlined v-model="name" label="姓名" />

      <q-input color="primary-12" v-model="tel" label="電話">
        <template v-slot:prepend>
          <q-icon name="phone" />
        </template>
      </q-input>

      <div class="q-gutter-md">
        <q-radio v-model="gender" val="female" label="女性" />
        <q-radio v-model="gender" val="male" label="男性" />
        <q-radio v-model="gender" val="bisexual" label="雙性" />
      </div>
    </q-form>
  </div> -->

  <Form :validation-schema="schema" @submit="onSubmit">
    <Field name="fullname" v-slot="{ errorMessage, value, field }">
      <q-input
        outlined
        label="姓名"
        v-bind="field"
        placeholder="Noel Gallenger"
        :model-value="value"
        :error="!!errorMessage"
        :error-message="errorMessage"
      />
    </Field>

    <Field name="telephone" v-slot="{ errorMessage, value, field }">
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
    </Field>

    <!--問題1: 不選的時候不能送出但沒有錯誤訊息-->
    <!--問題2: 送出後選項不會清除-->
    <Field name="gender" v-slot="{ errorMessage, field }">
      <q-option-group
        inline
        :options="options"
        type="radio"
        v-model="group"
        v-bind="field"
        :error="!!errorMessage"
        :error-message="errorMessage"
      />
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
