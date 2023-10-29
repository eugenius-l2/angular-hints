import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnChildChangesComponent } from './child-on-changes/child-on-changes.component';

@Component({
  selector: 'app-on-changes',
  standalone: true,
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, OnChildChangesComponent],
})
export class OnChangesComponent {
  value: string;
}
