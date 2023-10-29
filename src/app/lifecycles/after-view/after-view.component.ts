import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildAfterContentComponent } from './child-after-view/child-after-view.component';

@Component({
  selector: 'app-after-view',
  standalone: true,
  imports: [CommonModule, ChildAfterContentComponent],
  templateUrl: './after-view.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AfterViewComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild(ChildAfterContentComponent) component: ChildAfterContentComponent;

  value: string = '';
  private prevValue: string;

  ngAfterViewInit(): void {
    // this.value = this.component.value;

    setTimeout(() => {
      this.value = this.component.value;
    });
  }

  ngAfterViewChecked(): void {
    if (this.prevValue === this.component.value) {
      console.log('No changes');
    } else {
      this.prevValue = this.component.value;
      console.log('Changed -', this.prevValue);
    }
  }
}
