import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VIEW_TOKEN } from '../token';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [CommonModule],
  template: ` content - {{ value }} `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewChildComponent {
  value = inject(VIEW_TOKEN);
}
