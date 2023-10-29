import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-after-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './child-after-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildAfterContentComponent {
  value: string = 'text';
}
