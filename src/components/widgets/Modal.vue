<template>
  <Widget title="Modal">
    <v-dialog max-width="344">
      <template #activator="{ props }">
        <v-btn
          color="white"
          theme="light"
          v-bind="props"
        >
          Example Modal Window
        </v-btn>
      </template>

      <v-card theme="light" title="Title" text="Phasellus nec sem in justo pellentesque facilisis. Curabitur a felis in nunc fringilla tristique. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Suspendisse potenti. Phasellus accumsan cursus velit.
          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Quisque ut nisi. Etiam imperdiet imperdiet orci. Praesent vestibulum dapibus nibh. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Donec mollis hendrerit risus. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Cras ultricies mi eu turpis hendrerit fringilla. Vivamus elementum semper nisi. Curabitur a felis in nunc fringilla tristique.">
      </v-card>
    </v-dialog>
  </Widget>
</template>

<script setup lang="ts">

</script>
