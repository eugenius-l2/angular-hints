import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildBidingComponent } from './child-biding/child-biding.component';

export interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'app-binding',
  standalone: true,
  templateUrl: './binding.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ChildBidingComponent],
})
export class BindingComponent {
  users: User[] = [
    {
      name: 'Jack',
      age: 25,
    },
    {
      name: 'John',
      age: 35,
    },
    {
      name: 'Bily',
      age: 45,
    },
  ];

  onDelete(user: User): void {
    this.users = this.users.filter((item) => item.name !== user.name);
  }
}
