import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimeChecker } from '../change-detection.component';

@Component({
  selector: 'app-cd-child-iii',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cd-child-iii.component.html',
  styleUrls: ['./cd-child-iii.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdChildIIIComponent {
  checker = new TimeChecker();

  value: string = '';
}
