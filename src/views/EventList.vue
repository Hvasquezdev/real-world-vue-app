<template>
  <div id="EventList">
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

export default {
  components: {
    EventCard
  },
  data () {
    return {
      events: [
      ]
    }
  },
  created () {
    this.events = EventService.getEvents()
  }
}
</script>
