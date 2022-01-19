<script setup>
import { ref } from 'vue';
import { useForm, useField, Form } from 'vee-validate';
import * as yup from 'yup';

const isPwd = ref(true);

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
  tel: yup.string().required()
});

const { errors, handleSubmit } = useForm({
  validationSchema: schema
});

// No need to define rules for fields
const { value: email } = useField('email');
const { value: password } = useField('password');
const { value: tel } = useField('tel');

const onSubmit = handleSubmit((values, actions) => {
  console.log('data', values);
  actions.resetForm();
});
</script>

<template>
  <Form @submit="onSubmit">
    <div class="q-pa-md">
      <div class="q-gutter-md row items-start">
        <div class="col-6">
          <q-input
            autocomplete="current-password"
            label="密碼"
            name="password"
            v-model="password"
            filled
            :type="isPwd ? 'password' : 'text'"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <span>{{ errors.password }}</span>
        </div>
        <div class="col-6">
          <q-input label="電子信箱" name="email" v-model="email" type="email" />
          <span>{{ errors.email }}</span>
        </div>

        <div class="col-6">
          <q-input label="電話" name="tel" v-model="tel" type="tel" />
          <span>{{ errors.tel }}</span>
        </div>
      </div>
    </div>

    <q-btn class="q-mt-md" color="primary" type="submit" label="Submit" />
  </Form>
</template>

<style></style>
