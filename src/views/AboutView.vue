<script setup>
import vForm from '@/components/vForm.vue';
import { useField, useForm } from 'vee-validate';

const simpleSchema = {
  email(value) {
    if (value && value.trim()) {
      return true;
    }
    return 'This is required';
  },
  password(value) {
    if (value && value.trim()) {
      return true;
    }
    return 'This is required';
  }
};
// Create a form context with the validation schema
const { handleSubmit } = useForm({
  validationSchema: simpleSchema
});
// No need to define rules for fields
const { value: email, errorMessage: emailError } = useField('email');
const { value: password, errorMessage: passwordError } = useField('password');

// const { handleSubmit } = useForm({
//   validationSchema: simpleSchema
// });

function onInvalidSubmit({ values, errors, results }) {
  console.log(values); // current form values
  console.log(errors); // a map of field names and their first error message
  console.log(results); // a detailed map of field names and their validation results
}

const onSubmit = handleSubmit(values => {
  console.log('data', values);
  alert(JSON.stringify(values, null, 2));
}, onInvalidSubmit);
</script>

<template>
  <div class="about">
    <h2>表單input練習</h2>
    <vForm />

    <q-form @submit="onSubmit">
      <q-input name="email" v-model="email" autocomplete />
      <span>{{ emailError }}</span>
      <q-input
        name="password"
        v-model="password"
        type="password"
        autocomplete
      />
      <span>{{ passwordError }}</span>
      <q-btn class="q-mt-md" color="primary" type="submit" label="Submit" />
    </q-form>
  </div>
</template>
