<template>
  <Widget title="Twitter">
    <v-list
      class="column bg-transparent"
      tag="v-layout"
      three-line
    >
      <template v-for="n in 3" :key="n">
        <v-list-item class="py-2"
          title="Poster"
          subtitle="Lots of text that will need to be truncatedLots of text that will need to be truncatedLots of text that will need to be truncated"
          lines="two"
        >
          <template #prepend>
            <v-avatar color="cyan" theme="dark">
              <v-icon color="white">
                mdi-twitter
              </v-icon>
            </v-avatar>
          </template>
        </v-list-item>
      </template>
    </v-list>
  </Widget>
</template>

<script setup lang="ts">
</script>
