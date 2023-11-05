import { ChangeDetectionStrategy, Component, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
  selector: '[exportedD]',
  exportAs: 'exportedD',
  standalone: true,
})
export class ExportedDirective {
  click(): void {
    console.log('click');
  }
}

@Component({
  selector: 'app-export-as',
  standalone: true,
  imports: [CommonModule, ExportedDirective],
  template: `
    <p exportedD #exportedD="exportedD">text</p>
    <button (click)="exportedD.click()">click</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExportAsComponent {}
