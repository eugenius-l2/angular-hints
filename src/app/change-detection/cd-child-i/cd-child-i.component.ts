import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimeChecker } from '../change-detection.component';

@Component({
  selector: 'app-cd-child-i',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cd-child-i.component.html',
  styleUrls: ['./cd-child-i.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdChildIComponent {
  checker = new TimeChecker();

  value: string = '';
}
