<template>
  <Widget title="User Profile">
    <v-card-text class="text-center">
      <v-avatar
        class="mb-3 elevation-8"
        color="grey"
        size="88"
      >
        <v-img cover src="https://randomuser.me/api/portraits/men/86.jpg" />
      </v-avatar>

      <h2 class="headline mb-2">
        Aaron Moreno
      </h2>

      <span class="text-accent">
        Naples, Italy
      </span>
    </v-card-text>

    <v-card-actions class="justify-center">
      <v-btn icon>
        <v-icon>mdi-account-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-cog-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-email-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-key-outline</v-icon>
      </v-btn>
    </v-card-actions>
  </Widget>
</template>

<script setup lang="ts">
</script>
