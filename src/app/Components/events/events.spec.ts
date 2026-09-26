import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Events } from './events';
import { eventList } from '../../data/eventList';

describe('Events', () => {
  let component: Events;
  let fixture: ComponentFixture<Events>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Events],
    }).compileComponents();

    fixture = TestBed.createComponent(Events);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render one card per event', () => {
    const cards = (fixture.nativeElement as HTMLElement).querySelectorAll('.event-card');
    expect(cards.length).toBe(eventList.length);
  });

  it('should render the badge, title, meta and cta of an event', () => {
    const card = (fixture.nativeElement as HTMLElement).querySelector('.event-card')!;
    const bootcamp = eventList[0];

    expect(card.querySelector('.badge')?.textContent?.trim()).toBe(bootcamp.badge);
    expect(card.querySelector('h3')?.textContent?.trim()).toBe(bootcamp.title);
    expect(card.querySelector('.meta')?.textContent).toContain(bootcamp.date);
    expect(card.querySelector('.meta')?.textContent).toContain(bootcamp.duration);
    expect(card.querySelector('button')?.textContent?.trim()).toBe(bootcamp.ctaLabel);
  });

  it('should only show the fee when the event has one', () => {
    const cards = (fixture.nativeElement as HTMLElement).querySelectorAll('.event-card');

    expect(cards[0].textContent).toContain('₦15,000');
    expect(cards[1].textContent).not.toContain('Registration fee');
  });

  it('should open the modal for the clicked event and close it again', () => {
    const cards = (fixture.nativeElement as HTMLElement).querySelectorAll('.event-card');
    const slrButton = cards[1].querySelector('button') as HTMLButtonElement;

    expect(fixture.nativeElement.querySelector('.modal-backdrop')).toBeNull();

    slrButton.click();
    fixture.detectChanges();

    const modal = (fixture.nativeElement as HTMLElement).querySelector('.modal')!;
    expect(modal.textContent).toContain(eventList[1].title);

    component.closeEvent();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.modal-backdrop')).toBeNull();
  });
});
