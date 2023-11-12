import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewChildComponent } from './view-child.component';
import { VIEW_TOKEN } from '../token';

@Component({
  selector: 'app-view-host',
  standalone: true,
  styles: [':host { display: flex; flex-direction: column } '],
  template: `
    <p>host - {{ value }}</p>
    <ng-content></ng-content>
  `,
  providers: [
    {
      provide: VIEW_TOKEN,
      useValue: 'private',
    },
  ],
  // viewProviders: [
  //   {
  //     provide: VIEW_TOKEN,
  //     useValue: 'private',
  //   },
  // ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ViewChildComponent],
})
export class ViewHostComponent {
  value = inject(VIEW_TOKEN);
}
