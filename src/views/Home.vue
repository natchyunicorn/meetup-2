<template>
  <v-container>
    <v-layout class="btn-container d-flex flex-wrap align-start justify-center">
      <div class="d-flex align-start justify-center">
        <v-btn large router to="/event">Explore Events</v-btn>
      </div>
      <div class="d-flex align-start justify-start ">
        <v-btn large router to="/event/new">Add Events</v-btn>
      </div>
    </v-layout>
  </v-container>

  <v-layout class="d-flex flex-wrap align-start justify-center">
    <v-carousel>
      <v-carousel-item v-for="event in events" :src="event.imgUrl" :key="event.id">
        <div>
          <img :src="event.imgUrl" />
          <div class="title">{{ event.title }}</div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </v-layout>
</template>

<script>
import { useEventsStore } from '@/store/events';

export default {
  components: {},
  setup() {
    const eventsStore = useEventsStore();
    return {
      events: eventsStore.events
    };
  },
  name: 'HomePage'
}
</script>
