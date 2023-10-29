import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-view-ii',
  standalone: true,
  imports: [CommonModule],
  template: '<p>{{ id }}</p>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildViewIiComponent implements OnInit {
  @Input() id: string;

  changedValue: string;

  ngOnInit(): void {
    this.changedValue = this.id + Math.random().toString(36).slice(-8);
  }
}
