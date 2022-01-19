<script setup></script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <router-link to="/">QTable</router-link>
        <router-link to="/about">Vee-Validate Composition API</router-link>
        <router-link to="/script">script setup</router-link>
        <router-link to="/add">新增報修</router-link>
      </nav>
    </div>
  </header>

  <router-view />
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const text = ref('');
    return { text };
  }
};
</script>

<style lang="scss" scoped>
nav {
  width: fit-content;
  margin: 0 auto;
}

a {
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  outline: 1px dashed burlywood;

  & + a {
    margin-left: 10px;
  }
}
</style>
