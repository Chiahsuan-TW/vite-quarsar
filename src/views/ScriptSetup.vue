<script setup>
import Card from '../components/Card.vue';
import deduct from '@/helpers/deduct';
import { ref } from 'vue';

const books = ref([
  {
    title: 'Option B',
    content: 'option B is necessary',
    quantity: 5
  },
  {
    title: 'Becoming',
    content: 'A true story of First Lady Michelle',
    quantity: 4
  },
  {
    title: 'Normal People',
    content: 'All we need is love',
    quantity: 20
  }
]);
</script>

<template>
  <h2>script setup</h2>
  <Card
    v-for="(book, index) in books"
    :key="index"
    :book="book"
    @add-to-cart="deduct(book)"
  />
</template>
