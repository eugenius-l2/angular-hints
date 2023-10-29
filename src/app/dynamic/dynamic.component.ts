import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefDirective } from './ref.directive';
import { BooksComponent } from './books/books.component';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [CommonModule, RefDirective],
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicComponent {
  @ViewChild(RefDirective, { static: true }) container: RefDirective;
  // @ViewChild('containerRef', { read: ViewContainerRef }) container: ViewContainerRef;

  onCreate() {
    this.container.ref.clear();
    // this.container.clear();
    const bookItemComponentRef =
      this.container.ref.createComponent(BooksComponent);
    // const bookItemComponentRef = this.container.createComponent(BooksComponent);

    bookItemComponentRef.instance.value = {
      title: 'Great Expectations',
      author: 'Charles Dickens',
    };
  }

  onClear(): void {
    this.container.ref.clear();
    // this.container.clear();
  }
}
