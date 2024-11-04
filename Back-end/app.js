const express = require('express');
const Scheduler = require('./src/scheduler');

const app = express();
const scheduler = new Scheduler();
app.use(express.json());

// Route to add an event
app.post('/api/add-event', (req, res) => {
  const { startTime, endTime } = req.body;

  try {
    const newEvent = scheduler.addEvent(startTime, endTime);
    res.status(200).json(newEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to get all events
app.get('/api/events', (req, res) => {
  res.status(200).json(scheduler.getEvents());
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
