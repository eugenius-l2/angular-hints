import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  InjectionToken,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomNumService, randomNumFactory } from './token.service';
import { CounterService } from '../level/counter.service';
import { TokenHostComponent } from './token-first.component';

export const TITLE = new InjectionToken('title');
export const RANDOM = new InjectionToken('random');
export const COUNTER = new InjectionToken('counter');

@Component({
  selector: 'app-token-host',
  standalone: true,
  styles: [':host { display: flex; flex-direction: column } '],
  template: `
    {{ title }}
    <button (click)="counterService.increment()">Increment</button>
    <app-token-first />
    {{ randomNum }}
  `,
  providers: [
    CounterService,
    {
      provide: TITLE,
      useValue: 'angular-hints',
    },
    {
      provide: RANDOM,
      useFactory: randomNumFactory,
      // deps: [RandomNumService],
    },
    {
      provide: COUNTER,
      useExisting: CounterService,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TokenHostComponent],
})
export class TokenFirstComponent {
  // title = inject(TITLE);
  counterService = inject<CounterService>(COUNTER);
  randomNum = inject(RANDOM);

  constructor(@Inject(TITLE) public title: string) {}
}
