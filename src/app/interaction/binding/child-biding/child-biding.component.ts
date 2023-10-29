import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../binding.component';

@Component({
  selector: 'app-child-biding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-biding.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildBidingComponent {
  @Input() users: User[];
  @Input({
    required: true,
    alias: 'blockTitle',
    // booleanAttribute, numberAttribute
    transform: (value: string) => value.toUpperCase(),
  })
  title: string;

  @Output() delete: EventEmitter<User> = new EventEmitter<User>();
}
