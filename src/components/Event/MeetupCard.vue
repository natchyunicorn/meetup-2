<template>
  <v-card>
    <v-img :src="event.imgUrl" alt="Event image" />
    <v-card-title>
      <span class="title">{{ event.title }}</span>
      <v-icon small>mdi-calendar-today</v-icon>
      <span class="date">{{ event.date }}</span>
    </v-card-title>
    <v-card-text>
      <p>{{ event.description }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn small router :to="'/event/' + event.id">View</v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
export default {
  props: {
    event: Object
  },
  name: 'MeetupCard'
}
</script>
