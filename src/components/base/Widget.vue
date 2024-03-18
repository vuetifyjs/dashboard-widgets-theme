<template>
  <Card :title="title">
    <v-row
      :style="styles"
      class="ma-0 flex-column"
    >
      <v-col
        align-self="center"
        class="d-flex"
      >
        <v-row
          align="center"
          justify="center"
          class="flex-column py-3"
        >
          <slot />
        </v-row>
      </v-col>

      <p
        v-if="hasActionsSlot"
        class="text-center text-body-2"
      >
        <slot name="actions" />
      </p>
    </v-row>
  </Card>
</template>

<script setup lang="ts">

  interface Props {
    title: string
  }

  const props = defineProps<Props>()
  const slots = defineSlots<any>()

  const styles = computed(() => {
    return { 
      height: `calc(100% - ${props.title? '37px': ''})`
    }
  })

  const hasActionsSlot = computed(() => !!slots.actions);

</script>