import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Event, eventList } from '../../data/eventList';

@Component({
  imports: [RouterLink],
  selector: 'app-events',
  styleUrl: '../../app.css',
  templateUrl: './events.html',
})
export class Events {
  readonly events: Event[] = eventList;
}
