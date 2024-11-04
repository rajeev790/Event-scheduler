import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-event-form></app-event-form>
      <app-event-list></app-event-list>
    </div>
  `,
})
export class AppComponent {}
