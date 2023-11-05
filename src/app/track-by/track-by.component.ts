import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CildTrackByComponent } from './child-track-by.component';

export type Item = { num: number };

@Component({
  selector: 'app-track-by',
  standalone: true,
  template: `
    <button class="mb-2" (click)="onAdd()">Add</button>
    <app-child-track-by
      *ngFor="let item of list; trackBy: trackByFn"
      [item]="item"
      (delete)="onRemove($event.num)"
      class="block"
    />
  `,
  imports: [CommonModule, CildTrackByComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrackByComponent {
  list: Item[] = [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }, { num: 5 }];

  trackByFn(index: number, item: Item): number {
    return item.num;
  }

  onRemove(num: number): void {
    this.list = this.list
      .filter((item) => item.num !== num)
      .map((item) => ({ ...item }));
  }

  onAdd(): void {
    this.list = [...this.list, { num: 9 }].map((item) => ({ ...item }));
  }
}
