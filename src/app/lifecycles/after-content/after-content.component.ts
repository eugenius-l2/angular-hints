import {
  AfterContentChecked,
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildAfterContentComponent } from './child-after-content/child-after-content.component';

@Component({
  selector: 'app-after-content',
  standalone: true,
  templateUrl: './after-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ChildAfterContentComponent],
})
export class AfterContentComponent
  implements AfterContentInit, AfterContentChecked
{
  @ContentChild(ChildAfterContentComponent) content: ChildAfterContentComponent;

  value: string = '';
  private prevValue: string;

  ngAfterContentInit(): void {
    this.value = this.content.value;
  }

  ngAfterContentChecked(): void {
    if (this.prevValue === this.content.value) {
      console.log('No changes');
    } else {
      this.prevValue = this.content.value;
      console.log('Changed -', this.prevValue);
    }
  }
}
