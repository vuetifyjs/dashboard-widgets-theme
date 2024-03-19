<template>
  <Widget title="Last 30 Days Stats">
    <VSparkline
      :model-value="values"
      class="px-3 mt-4"
      color="secondary"
    />
    <template #actions>
      StatCounter Information
    </template>
  </Widget>
</template>

<script setup lang="ts">
  const values = ref([0, 3, 2, 5, 4, 4.5, 3.5, 7])
</script>
