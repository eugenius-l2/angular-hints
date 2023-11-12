import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-level-with-module-host',
  template: `
    <button (click)="counterService.increment()">Increment</button>
    <app-level-with-module />
  `,
  styles: [':host { display: flex; flex-direction: column } '],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LevelWithModuleHostComponent {
  counterService = inject(CounterService);
}
