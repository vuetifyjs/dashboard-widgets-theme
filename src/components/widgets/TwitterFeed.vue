<template>
  <Widget title="Twitter">
    <v-list
      class="column bg-transparent"
      tag="v-layout"
      three-line
    >
        <v-list-item
          v-for="n in 3" :key="n"
          class="py-2"
          lines="two"
          subtitle="Lots of text that will need to be truncatedLots of text that will need to be truncatedLots of text that will need to be truncated"
          title="Poster"
        >
          <template #prepend>
            <v-avatar color="cyan" theme="dark">
              <v-icon color="white">
                mdi-twitter
              </v-icon>
            </v-avatar>
          </template>
        </v-list-item>
    </v-list>
  </Widget>
</template>

<script setup lang="ts">
</script>
