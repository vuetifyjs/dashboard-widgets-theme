<template>
  <Widget title="Site Bandwidth">
    <v-progress-circular
      color="#D35253"
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
  const value = ref('75')
</script>
