<template>
  <v-app>
    <v-container fluid>
      <v-row justify="center">
        <v-col
          v-for="(widget, i) in widgets"
          :key="i"
          class="d-flex child-flex"
          cols="12"
          sm="6"
          md="4"
          xl="2"
        >
          <component :is="widget" />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/stores/app'
 
  const { widgets } = useAppStore();

</script>

<style>

</style>
