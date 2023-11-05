import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
  standalone: true,
})
export class BoldDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.fontWeight = '900';
  }
}

@Directive({
  standalone: true,
})
export class ColorDirective implements OnInit {
  @Input() color: string = 'black';

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.color = this.color;
  }
}

@Directive({
  selector: '[colorBold]',
  standalone: true,
  hostDirectives: [BoldDirective, ColorDirective],
})
export class ColorBoldDirective {}

@Component({
  selector: 'app-composition',
  standalone: true,
  imports: [CommonModule],
  template: '<span> Color </span>',
  hostDirectives: [
    {
      directive: ColorDirective,
      inputs: ['color'],
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompositionComponent {}
