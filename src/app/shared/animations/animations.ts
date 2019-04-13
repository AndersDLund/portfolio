import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeIn =
  trigger('fadeIn', [
    transition(':enter', [
      style({ opacity: '0' }),
      animate('3s ease-out', style({ opacity: '1' }))
    ])
  ]);

// export const pulse =
//   trigger('pulse', [
//     transition('* => *', [
//       style({ transform: 'scale(1)' }),
//       animate('.5s', style({ transform: 'scale(1.1)' })),
//       animate('.5s', style({ transform: 'scale(1)' })),
//     ])
//   ]);
