<template>
  <Widget title="Disk Space">
    <v-progress-circular
      color="#39C2B2"
      :model-value="value"
      size="128"
      width="24"
    />

    <div class="pa-3 headline font-weight-light">
      {{ value }}%
    </div>
  </Widget>
</template>

<script setup lang="ts">
  const value = ref('50')
</script>
