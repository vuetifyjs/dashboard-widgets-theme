<template>
  <Widget title="Server Uptime">
    <v-list
      class="bg-transparent"
      lines="two"
    >
      <v-list-item
        title="up"
        subtitle="2d 3h 45m"
        prepend-icon="mdi-server"
      />
    </v-list>

    <template #actions>
      Highest uptime: 12d 9h 32m
    </template>
  </Widget>
</template>

<script setup lang="ts">

</script>
