import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SchedulerService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  addEvent(startTime: number, endTime: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/add-event`, { startTime, endTime });
  }

  getEvents(): Observable<{ startTime: number; endTime: number }[]> {
    return this.http.get<{ startTime: number; endTime: number }[]>(`${this.apiUrl}/events`);
  }
}
