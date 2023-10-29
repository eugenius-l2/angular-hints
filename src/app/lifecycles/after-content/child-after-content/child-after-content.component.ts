import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-after-content',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './child-after-content.component.html',
  styleUrls: ['./child-after-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildAfterContentComponent {
  value: string = 'text';
}
