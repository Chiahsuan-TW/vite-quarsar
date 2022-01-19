<script setup>
import { Form, Field } from 'vee-validate';
import { ref } from 'vue';
import * as yup from 'yup';
import { issueStore } from '@/stores/issueStore.js';

function onSubmit(values, actions) {
  actions.resetForm();

  const formData = { number: Date.now(), isPermitted: 'pending', ...values };

  const issueList = issueStore();
  issueList.recordIssue(formData);
}

const models = ref(['Model1', 'Model2', 'Model3', 'Model4']);
const types = ref(['Console', 'Driver', 'Motor']);
const problems = ref(['Q1', 'Q2', 'Q3', 'Q4']);

const schema = yup.object({
  partnumber: yup.string().trim().length(7).required(),
  model: yup.string().required(),
  type: yup.string().required(),
  problem: yup.string().required()
});
</script>

<template>
  <Form :validation-schema="schema" @submit="onSubmit">
    <section>
      <!--v-slot 會以內部的元素抽換掉Field-->
      <Field name="partnumber" v-slot="{ errorMessage, value, field }">
        <label for="">PN or SN</label>
        <q-input
          outlined
          v-bind="field"
          :model-value="value"
          :error="!!errorMessage"
          :error-message="errorMessage"
        >
        </q-input>
      </Field>

      <Field name="model" v-slot="{ errorMessage, value, field }">
        <q-select
          outlined
          label="model"
          :model-value="value"
          v-bind="field"
          :options="models"
          behavior="menu"
          :error="!!errorMessage"
          :error-message="errorMessage"
        ></q-select>
      </Field>

      <Field name="type" v-slot="{ errorMessage, value, field }">
        <q-select
          outlined
          label="type"
          :model-value="value"
          v-bind="field"
          :options="types"
          behavior="menu"
          :error="!!errorMessage"
          :error-message="errorMessage"
        ></q-select>
      </Field>

      <Field name="problem" v-slot="{ errorMessage, value, field }">
        <q-select
          outlined
          label="problem description"
          :model-value="value"
          v-bind="field"
          :options="problems"
          behavior="menu"
          :error="!!errorMessage"
          :error-message="errorMessage"
        ></q-select>
      </Field>
    </section>

    <section></section>
    <section class="submit">
      <q-btn class="q-mt-md" color="primary" type="submit" label="Submit" />
    </section>
  </Form>
</template>

<style lang="scss" scoped>
form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 80%;
  padding: 20px 0;
  margin: 0 auto;

  section {
    flex-basis: 40%;
  }

  .submit {
    flex-basis: 100%;
    text-align: center;
  }
}
</style>
