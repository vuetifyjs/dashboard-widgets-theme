<template>
  <Widget title="Base Subscribers">
    <h2 class="headline">
      105,578
    </h2>

    <VSparkline
      class="px-3 mt-4"
      color="rgba(255, 255, 255, .2)"
      :model-value="value"
    />

    <template #actions>
      98 Subscribed Today
    </template>
  </Widget>
</template>

<script setup lang="ts">
  const value = ref([105, 120, 103, 110, 113, 127, 105])
</script>
