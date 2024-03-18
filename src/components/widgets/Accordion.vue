<template>
  <Widget title="Accordion">
    <v-expansion-panels accordion>
      <v-expansion-panel
        v-for="n in 3"
        :key="n"
        class="bg-transparent"
      >
        <v-expansion-panel-title>
          <span>Collapsible Group #{{ n }}</span>
        </v-expansion-panel-title>
        <v-expansion-panel-text class="transparent">
          <v-card-text>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla iaculis
          </v-card-text>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </Widget>
</template>

<script setup lang="ts">

</script>

<style lang="sass">
  .v-expansion-panel:before
    box-shadow: none
</style>
