import {
  ChangeDetectionStrategy,
  Component,
  Host,
  Inject,
  Optional,
  Self,
  SkipSelf,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { VALUE } from '../token';

@Component({
  selector: 'app-decorator-first',
  standalone: true,
  template: `{{ value }}`,
  providers: [
    {
      provide: VALUE,
      useValue: 'child',
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class DecoratorFirstComponent {
  // value = inject(VALUE);

  constructor(@Inject(VALUE) public value: string) {}
  // constructor(@SkipSelf() @Inject(VALUE) public value: string) {}
  // constructor(@Self() @Optional() @Inject(VALUE) public value: string) {
  //   console.log(value);
  // }
}
