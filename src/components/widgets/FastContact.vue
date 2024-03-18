<template>
  <Widget title="Fast Contact">
    <v-card-text 
      class="text-center"
      style="width: 100%;"
    >
      <v-text-field
        filled
        label="Name"
      />

      <v-text-field
        filled
        label="Email"
      />

      <v-textarea
        filled
        label="Message"
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
