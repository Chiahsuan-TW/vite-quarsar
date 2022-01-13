<script setup></script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/script">script</router-link>
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

<style lang="scss"></style>
