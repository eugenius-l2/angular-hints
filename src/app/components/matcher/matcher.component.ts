import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matcher.component.html',
  styleUrls: ['./matcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatcherComponent {

}
