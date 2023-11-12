import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-level-third',
  standalone: true,
  imports: [CommonModule],
  template: 'third {{ counterService.value() }}',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LevelThirdComponent {
  counterService = inject(CounterService);
}
