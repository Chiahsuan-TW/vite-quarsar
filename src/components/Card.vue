<script setup>
defineProps({
  book: Object
});

defineEmits(['add-to-cart']);

</script>

<template>
  <div class="card">
    <h4>{{ book.title }}</h4>
    <p>{{ book.content }}</p>
    <span>剩餘數量: {{ book.quantity }}</span>
    <button @click="$emit('add-to-cart')">加入購物車</button>
  </div>
</template>

<style lang="scss" scoped>
.card {
  outline: 1px dotted rgb(66, 130, 182);
  max-width: 300px;
  padding: 10px;
}

button {
  margin-left: 5px;
  background: rgb(81, 233, 213);
  border-radius: 6px;
  border: 1px solid rgb(76, 112, 211);
}

button:hover {
  cursor: pointer;
}
</style>
