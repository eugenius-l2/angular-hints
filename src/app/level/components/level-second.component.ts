import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../counter.service';
import { LevelThirdComponent } from './level-third.component';

@Component({
  selector: 'app-level-second',
  standalone: true,
  template: `
    second {{ counterService.value() }} <br />
    <app-level-third />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, LevelThirdComponent],
  providers: [CounterService],
})
export class LevelSecondComponent {
  counterService = inject(CounterService);
}
