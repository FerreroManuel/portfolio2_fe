import { trigger, transition, style, query, group, animate, keyframes } from '@angular/animations'

export const fadeAnimation = trigger('fadeAnimation', [
    transition('* <=> *', [
        query(':enter, :leave',
            style({
                position: 'absolute',
                width: '100%',
            }), {optional: true}),
        group([
            query(':enter', [
                animate('1.5s ease', keyframes([
                    style({ opacity: 0, offset: 0 }),
                    style({ opacity: 0, offset: .5 }),
                    style({ opacity: 1, offset: 1 }),
                ])),
            ], {optional: true}),
            query(':leave', [
                animate('2s ease', keyframes([
                    style({ opacity: 1, offset: 0 }),
                    style({ opacity: 0, offset: .5 }),
                ])),
            ], {optional: true})
        ]),
    ])
]);