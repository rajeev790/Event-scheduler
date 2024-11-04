const Scheduler = require('../src/scheduler');

describe('Scheduler', () => {
  let scheduler;

  beforeEach(() => {
    scheduler = new Scheduler();
  });

  test('should add an event without overlapping', () => {
    const event = scheduler.addEvent(10, 11);
    expect(event).toEqual({ startTime: 10, endTime: 11 });
  });

  test('should throw an error for overlapping events', () => {
    scheduler.addEvent(10, 12);
    expect(() => scheduler.addEvent(11, 13)).toThrow('Event overlaps with an existing event');
  });

  test('should retrieve all events', () => {
    scheduler.addEvent(9, 10);
    scheduler.addEvent(12, 13);
    expect(scheduler.getEvents().length).toBe(2);
  });
});
