import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
  IterableDiffer,
  IterableDiffers,
  KeyValueDiffer,
  KeyValueDiffers,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Author, Book } from '../do-check.component';

@Component({
  selector: 'app-child-do-check',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>Author id - {{ author.id }}</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildDoCheckComponent implements OnInit, DoCheck {
  @Input() author: Author;
  @Input() books: Book[];

  valueDiffer: KeyValueDiffer<any, any>;
  arrayDiffer: IterableDiffer<any>;

  constructor(
    private valueDiffers: KeyValueDiffers,
    private itarableDiffers: IterableDiffers
  ) {}

  ngOnInit(): void {
    this.valueDiffer = this.valueDiffers.find(this.author).create();
    this.arrayDiffer = this.itarableDiffers.find(this.books).create();
  }

  ngDoCheck(): void {
    const valueChanges = this.valueDiffer.diff(this.author);
    const arrayChanges = this.arrayDiffer.diff(this.books);

    if (valueChanges) {
      valueChanges.forEachChangedItem((item) => console.log(item));
    }

    if (arrayChanges) {
      arrayChanges.forEachAddedItem((item) => console.log(item));
    }
  }
}
