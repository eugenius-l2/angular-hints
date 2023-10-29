import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefDirective } from '../ref.directive';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, RefDirective],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent {
  value: any = null;
}
