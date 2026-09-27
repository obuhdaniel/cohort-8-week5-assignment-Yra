import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Event, eventList } from '../../data/eventList';

@Component({
  imports: [RouterLink],
  selector: 'app-event-details',
  styleUrl: '../../app.css',
  templateUrl: './event-details.html',
})
export class EventDetails {
  private readonly route = inject(ActivatedRoute);

  readonly event = signal<Event | null>(null);
  readonly notFound = signal(false);

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      const id = params.get('id');
      const match = eventList.find((item) => item.id === id) ?? null;

      this.event.set(match);
      this.notFound.set(id !== null && match === null);
    });
  }
}
