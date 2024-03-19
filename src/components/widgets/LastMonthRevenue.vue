<template>
  <Widget title="Last Month Revenue">
    <v-list
      class="bg-transparent pa-0"
      lines="two"
    >
      <v-list-item
        v-for="({ icon, value, text }, i) in fields"
        :key="i"
        :subtitle="text"
        :title="value"
        class="py-2"
      >
        <template #prepend>
          <v-icon size="x-large">
            {{ icon }}
          </v-icon>
        </template>
      </v-list-item>
    </v-list>

    <template #actions>
      15% Compared Last Month
    </template>
  </Widget>
</template>

<script setup lang="ts">
  const fields = ref([
    {
      icon: 'mdi-check',
      text: 'Approved',
      value: 726,
    },
    {
      icon: 'mdi-progress-clock',
      text: 'Pending',
      value: 531,
    },
    {
      icon: 'mdi-delete',
      text: 'Denied',
      value: 156,
    },
  ])
</script>
