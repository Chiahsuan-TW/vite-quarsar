<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div id="q-app" style="min-height: 100vh">
      <div class="q-pa-md">
        <q-table
          title="Treats"
          :rows="rows"
          :columns="columns"
          row-key="name"
        ></q-table>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
