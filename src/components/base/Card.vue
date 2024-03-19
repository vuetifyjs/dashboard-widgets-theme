<template>
  <v-card
    v-bind="$attrs"
    color="#556371"
    theme="dark"
    width="100%"
  >
    <template v-if="title">
      <v-card-text
        class="text-secondary text-uppercase py-2"
      >{{ title }}</v-card-text>
      <v-divider color="black" />
    </template>
    <slot />
  </v-card>
</template>

<script setup lang="ts">

  defineOptions({
    inheritAttrs: false,
  })

  interface Props {
    title?: string
  }

  withDefaults(defineProps<Props>(), {
    title: '',
  })
</script>
