<script setup></script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/script">script</router-link>
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

<style lang="scss">
a {
  text-decoration: none;

  & + a {
    margin-left: 10px;
  }
}
</style>
