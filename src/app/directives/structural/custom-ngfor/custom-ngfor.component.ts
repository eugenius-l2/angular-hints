import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
  selector: '[customNgFor]',
  standalone: true,
})
export class CustomNgForDirective {
  @Input('customNgForOf') set list(list: Array<unknown>) {
    for (let i = 0; i < list.length; i++) {
      const context = {
        index: i,
        $implicit: list[i],
      };
      this.viewContainerRef.createEmbeddedView(this.tempalateRef, context);
    }
  }

  constructor(
    private tempalateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}
}

@Component({
  selector: 'app-custom-ngfor',
  standalone: true,
  imports: [CommonModule, CustomNgForDirective],
  template: `
    <ul>
      <li *customNgFor="let item of list; let i = index">{{ item }} {{ i }}</li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomNgforComponent {
  list: number[] = [1, 2, 3, 4, 5];
}
