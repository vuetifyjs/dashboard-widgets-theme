<template>
  <Widget :title="title">
    <v-list
      class="bg-transparent"
      three-line
    >
      <v-list-item
        v-for="({ name, text }, i) in emails"
        :key="i"
        :subtitle="text"
        :title="name"
        class="py-4"
      >
        <template #prepend>
          <v-avatar color="grey" tile />
        </template>
        <template #append>
          <v-list-item-action>
            <v-row
              class="ma-0 pa-2"
            >
              <v-icon @click="reply(i)">
                mdi-reply
              </v-icon>
            </v-row>
          </v-list-item-action>
        </template>
      </v-list-item>
    </v-list>
  </Widget>
</template>

<script setup lang="ts">
  const emails = ref([
    {
      name: 'Isaac D.',
      text: 'Did you see the new episode of Game of Thrones?',
    },
    {
      name: 'Declan L.',
      text: 'Hey man! Where is the next place we are playing at?',
    },
    {
      name: 'Noah B.',
      text: 'I\'ll call you later, there is a new episode on',
    },
    {
      name: 'Carmelo S.',
      text: 'Thanks for the pizza, everyone enjoyed it',
    },
  ])
  const title = computed(() => {
    return `Inbox (${emails.value.length})`
  })
  const reply = () => {

  }
</script>
