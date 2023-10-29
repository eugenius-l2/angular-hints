import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdChildIIIComponent } from '../cd-child-iii/cd-child-iii.component';
import { FormsModule } from '@angular/forms';
import { TimeChecker } from '../change-detection.component';

@Component({
  selector: 'app-cd-child-ii',
  standalone: true,
  templateUrl: './cd-child-ii.component.html',
  styleUrls: ['./cd-child-ii.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CdChildIIIComponent, FormsModule],
})
export class CdChildIIComponent {
  checker = new TimeChecker();

  value: string = '';
}
