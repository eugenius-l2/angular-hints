import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-styling',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StylingComponent {}
