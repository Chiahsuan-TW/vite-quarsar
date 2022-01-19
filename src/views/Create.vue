<script setup>
import RepairForm from '@/components/RepairForm.vue';
import vForm from '@/components/vForm.vue';
import QuasarForm from '@/components/QuasarForm.vue';
import { shallowRef } from 'vue';

const currentTab = shallowRef(vForm);
</script>

<template>
  <div class="tabs">
    <button @click="currentTab = RepairForm">新增報修表單(Form + Field)</button>
    <button @click="currentTab = vForm">表單練習(將input包成元件)</button>
    <button @click="currentTab = QuasarForm">
      Quasar表單練習(useForm, useField)
    </button>
  </div>
  <component :is="currentTab"></component>
</template>

<style lang="scss" scoped>
.tabs {
  width: fit-content;
  margin: 0 auto;
  padding: 20px;

  button {
    border: 0;
    padding: 10px;
    border-radius: 8px;
    background-color: cadetblue;
    color: #fff;
  }

  button:hover {
    cursor: pointer;
  }

  button + button {
    margin-left: 10px;
  }
}
</style>
