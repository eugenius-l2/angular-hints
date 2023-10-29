import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  OnInit,
  QueryList,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildContentComponent } from './child-content/child-content.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent implements OnInit, AfterContentInit {
  @ContentChild(ChildContentComponent, { static: true })
  child: ChildContentComponent;
  @ContentChildren(ChildContentComponent)
  children: QueryList<ChildContentComponent>;

  ngOnInit(): void {
    console.log('OnInit');
    console.log('Child', this.child);
    console.log('Children', this.children);
  }

  ngAfterContentInit(): void {
    console.log('AfterViewInit');
    console.log('Child', this.child);
    console.log('Children', this.children);
  }
}
