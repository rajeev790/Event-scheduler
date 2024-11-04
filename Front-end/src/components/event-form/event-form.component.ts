import { Component } from '@angular/core';
import { SchedulerService } from '../../services/scheduler.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
})
export class EventFormComponent {
  startTime: string = '';
  endTime: string = '';

  constructor(private schedulerService: SchedulerService) {}

  addEvent() {
    const start = parseFloat(this.startTime);
    const end = parseFloat(this.endTime);
    
    if (start >= end) {
      alert('End time must be after start time');
      return;
    }

    this.schedulerService.addEvent(start, end).subscribe(
      () => alert('Event added successfully'),
      (error) => alert(error.error.error)
    );
  }
}
