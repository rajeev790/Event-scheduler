import { Component, OnInit } from '@angular/core';
import { SchedulerService } from '../../services/scheduler.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
})
export class EventListComponent implements OnInit {
  events: { startTime: number; endTime: number }[] = [];

  constructor(private schedulerService: SchedulerService) {}

  ngOnInit(): void {
    this.schedulerService.getEvents().subscribe((events) => (this.events = events));
  }
}
