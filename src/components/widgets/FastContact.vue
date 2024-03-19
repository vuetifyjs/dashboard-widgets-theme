<template>
  <Widget title="Fast Contact">
    <v-card-text
      class="text-center"
      style="width: 100%;"
    >
      <v-text-field
        label="Name"
        filled
      />

      <v-text-field
        label="Email"
        filled
      />

      <v-textarea
        label="Message"
        filled
      />

      <v-btn
        color="accent"
      >
        <p class="text-white">Send</p>
      </v-btn>
    </v-card-text>
  </Widget>
</template>

<script setup lang="ts">

</script>
