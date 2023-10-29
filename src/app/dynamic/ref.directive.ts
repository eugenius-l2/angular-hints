import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRef]',
  standalone: true,
})
export class RefDirective {
  constructor(public ref: ViewContainerRef) {}
}
