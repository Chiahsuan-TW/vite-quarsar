<script setup>
import { useField } from 'vee-validate';

// 在 template 上可以直接取用name
// 但在 script 中使用要先存到變數後再用物件的方式取用
const props = defineProps({
  // name: {
  //   type: String,
  //   required: true
  // },
  // label: {
  //   type: String,
  //   required: true
  // },
  // placeholder: {
  //   type: String,
  //   required: true
  // },
  input: {
    type: Object,
    required: true
  }
});

const { errorMessage, value } = useField(props.input.name);
</script>

<template>
  <div>
    <label>{{ input.label }}</label>
    <q-input v-model="value" :placeholder="input.placeholder"> </q-input>
    <span>{{ errorMessage }}</span>
  </div>
</template>

<style lang="scss" scoped></style>
