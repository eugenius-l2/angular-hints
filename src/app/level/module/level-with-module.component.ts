import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-level-with-module',
  template: 'with module {{ counterService.value() }}',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewWithModuleComponent {
  counterService = inject(CounterService);
}
