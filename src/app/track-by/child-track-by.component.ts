import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from './track-by.component';

@Component({
  selector: 'app-child-track-by',
  standalone: true,
  imports: [CommonModule],
  template: `
    {{ item.num }} - <button (click)="delete.emit(item)">Remove</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CildTrackByComponent implements OnInit, OnDestroy {
  @Input() item!: Item;
  @Output() delete = new EventEmitter<Item>();

  ngOnInit(): void {
    console.log('init', this.item.num);
  }

  ngOnDestroy(): void {
    console.log('destroy', this.item.num);
  }
}
