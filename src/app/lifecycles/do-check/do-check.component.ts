import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildDoCheckComponent } from './child-do-check/child-do-check.component';

export interface Book {
  id: number;
  title: string;
}

export interface Author {
  id: number;
  name: string;
}

const generateNumber = (min = 0, max = 20): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

@Component({
  selector: 'app-do-check',
  standalone: true,
  imports: [CommonModule, ChildDoCheckComponent],
  templateUrl: './do-check.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoCheckComponent {
  books: Book[] = [
    {
      id: 1,
      title: 'The Call of Cthulhu and Other Weird Stories',
    },
    {
      id: 2,
      title: 'The Shadow Over Innsmouth',
    },
    {
      id: 3,
      title: 'The Dunwich Horror',
    },
  ];

  author: Author = {
    id: 10,
    name: 'H.P. Lovecraft',
  };

  onMutateAuthor(): void {
    this.author.id = generateNumber();
  }

  onMutateBooks(): void {
    this.books.push({
      id: 6,
      title: 'New',
    });
  }
}
