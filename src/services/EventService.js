import events from '../constants/events.js';

export default {
  getEvents () {
    return events;
  },
  getEvent(id) {
    return events.filter(event => {
      if (event.id == id) {
        return event;
      }
    })
  }
}