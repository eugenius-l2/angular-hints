import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-level-with-module-second',
  template: 'with module second {{ counterService.value() }}',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LevelWithModuleSecondComponent {
  counterService = inject(CounterService);
}
