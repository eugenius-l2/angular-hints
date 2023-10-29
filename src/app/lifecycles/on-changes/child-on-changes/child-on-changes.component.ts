import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-on-changes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-on-changes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnChildChangesComponent implements OnChanges {
  @Input() data: string;
  // @Input() set data(value: string) {
  //   console.log(value);
  // }

  change: SimpleChange;

  ngOnChanges(changes: SimpleChanges): void {
    for (let prop in changes) {
      if (changes.hasOwnProperty(prop)) {
        this.change = changes[prop];
        console.log(this.change);
      }
    }
  }
}
