class Scheduler {
    constructor() {
      this.events = [];
    }
  
    addEvent(startTime, endTime) {
      // Check for overlapping events
      for (let event of this.events) {
        if ((startTime < event.endTime) && (endTime > event.startTime)) {
          throw new Error('Event overlaps with an existing event');
        }
      }
  
      const newEvent = { startTime, endTime };
      this.events.push(newEvent);
      return newEvent;
    }
  
    getEvents() {
      return this.events;
    }
  }
  
  module.exports = Scheduler;
  