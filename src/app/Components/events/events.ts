import { Component, signal } from '@angular/core';
import { Event, eventList } from '../../data/eventList';

@Component({
  imports: [],
  selector: 'app-events',
  styleUrl: '../../app.css',
  templateUrl: './events.html',
})
export class Events {
  readonly events: Event[] = eventList;
  readonly selected = signal<Event | null>(null);

  openEvent(id: string): void {
    this.selected.set(this.events.find((event) => event.id === id) ?? null);
  }

  closeEvent(): void {
    this.selected.set(null);
  }
}
