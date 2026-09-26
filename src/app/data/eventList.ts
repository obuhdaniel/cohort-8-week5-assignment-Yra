export interface Event {
  id: string;
  imageText: string;
  imageStyle?: string;
  badge: string;
  badgeClass?: string;
  title: string;
  date: string;
  venue: string;
  duration: string;
  description?: string;
  fee?: string;
  ctaLabel: string;
  ctaClass: string;
}

export const eventList: Event[] = [
  {
    id: 'bootcamp',
    imageText: 'BOOTCAMP',
    badge: 'Training',
    title: 'YRA Global Research Bootcamp 2026',
    date: '20 Aug',
    venue: 'Online',
    duration: '4 Weeks',
    fee: '₦15,000',
    ctaLabel: 'Register now',
    ctaClass: 'btn btn-primary',
  },
  {
    id: 'slr',
    imageText: 'SLR',
    imageStyle: 'background:linear-gradient(135deg,#ff861b,#ffc27d)',
    badge: 'Seminar',
    badgeClass: 'orange',
    title: 'How to Write a Systematic Literature Review',
    date: '30 Aug',
    venue: 'Online',
    duration: '1 Day',
    description: 'Practical SLR writing and publication session.',
    ctaLabel: 'View details',
    ctaClass: 'btn btn-secondary',
  },
  {
    id: 'spss',
    imageText: 'SPSS',
    badge: 'Workshop',
    title: 'Data Analysis with SPSS for Researchers',
    date: '10 Sep',
    venue: 'Online',
    duration: '2 Days',
    description: 'Hands-on statistical analysis workshop.',
    ctaLabel: 'View details',
    ctaClass: 'btn btn-secondary',
  },
];
