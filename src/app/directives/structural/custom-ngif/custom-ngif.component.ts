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
  selector: '[customNgIf]',
  standalone: true,
})
export class CustomNgIfDirective {
  @Input() set while(condition: boolean) {
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.tempalateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  constructor(
    private tempalateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}
}

@Component({
  selector: 'app-custom-ngif',
  standalone: true,
  imports: [CommonModule, CustomNgIfDirective],
  template: `
    <ng-template customNgIf [while]="isShow">hello</ng-template>
    <button (click)="onClick()">Click</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomNgifComponent {
  isShow: boolean = true;

  onClick(): void {
    this.isShow = !this.isShow;
  }
}
