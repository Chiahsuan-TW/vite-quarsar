<script setup>
import { issueStore } from '@/stores/issueStore.js';

const issue = issueStore();

const columns = [
  {
    name: 'name',
    required: true,
    label: 'number',
    align: 'left',
    field: row => row.number,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'SN&PN',
    label: 'SN&PN',
    field: 'partnumber',
    sortable: true
  },
  { name: 'ModelName', label: 'ModelName', field: 'type' },
  { name: 'Agree or not', label: 'Agree or not', field: 'isPermitted' }
];

const rows = issue.issueList;
</script>

<template>
  <div class="q-pa-md">
    <q-table
      title="報修表單"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :rows-per-page-options="[5, 10, 15, 0]"
    />
  </div>
</template>
