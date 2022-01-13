<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div>
    <span>{{ count }}</span>
    <button @click="count++">Increment count</button>
    <button @click="nested.count.value++">Nested Increment count</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const count = ref(0);
    return {
      count,

      nested: {
        count
      }
    };
  }
};
</script>
