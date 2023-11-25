import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nested',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NestedComponent {

}
