import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildContentComponent {
  @Input({ required: true }) index: string;
}
