import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../counter.service';
import { LevelFirstComponent } from './level-first.component';
import { LevelSecondComponent } from './level-second.component';

@Component({
  selector: 'app-level-host',
  standalone: true,
  template: `
    <button (click)="counterService.increment()">Increment</button>
    <app-level-first />
    <app-level-second />
  `,
  styles: [':host { display: flex; flex-direction: column } '],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, LevelFirstComponent, LevelSecondComponent],
})
export class OverviewHostComponent {
  counterService = inject(CounterService);
}
