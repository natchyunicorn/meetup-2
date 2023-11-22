<template>
  <v-container>
    <v-layout v-for="event in events" :key="event.id">
      <MeetupCard :event="event" />
    </v-layout>
  </v-container>
</template>

<script>
import MeetupCard from '@/components/Event/MeetupCard.vue';
import { useEventsStore } from '@/store/events';

export default {
  components: { MeetupCard },
  setup() {
    const eventsStore = useEventsStore();
    return {
      events: eventsStore.events
    };
  },
  name: 'MeetupPage'
}
</script>
