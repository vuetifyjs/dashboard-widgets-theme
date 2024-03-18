<template>
  <Widget title="Gauge Chart">
    <v-icon
      class="mb-3"
      size="x-large"
    >
      mdi-gauge
    </v-icon>

    <v-progress-circular
      :model-value="value"
      size="128"
      width="24"
    >
      <h3 class="title secondary--text">
        {{ value }}%
      </h3>
    </v-progress-circular>
  </Widget>
</template>

<script setup lang="ts">
  const value = ref(25)
</script>
