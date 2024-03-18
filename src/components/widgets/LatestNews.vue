<template>
  <Widget title="Latest News">
    <v-card-text class="text-center">
      <v-icon size="48">
        mdi-newspaper
      </v-icon>
    </v-card-text>

    <v-card-text>{{ article.blurb }}</v-card-text>

    <template #actions>
      Last Updated: {{ article.ago }}
    </template>
  </Widget>
</template>

<script setup lang="ts">
  const article = ref({
    blurb: 'A beautiful new dashboard theme released by John Leider. Please visit vuetifyjs.com for more details.',
    ago: '15 minutes ago',
  })
</script>
