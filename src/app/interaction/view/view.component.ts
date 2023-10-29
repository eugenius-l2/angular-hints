import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildViewComponent } from './child-view/child-view.component';
import { ChildViewIiComponent } from './child-view-ii/child-view-ii.component';

@Component({
  selector: 'app-view',
  standalone: true,
  templateUrl: './view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ChildViewComponent, ChildViewIiComponent],
})
export class ViewComponent implements OnInit, AfterViewInit {
  @ViewChild(ChildViewComponent, { static: true }) child: ChildViewComponent;
  @ViewChildren(ChildViewIiComponent) children: QueryList<ChildViewIiComponent>;

  dataFromChild: number[] = [];
  dataFromChildren: string[] = [];
  ids: string[] = ['001', '002', '003'];

  ngOnInit(): void {
    console.log('OnInit');
    console.log('Child', this.child);
    console.log('Children', this.children);
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
    console.log('Child', this.child);
    console.log('Children', this.children);
  }

  onGetDataFromChild(): void {
    this.dataFromChild = this.child.data;
  }

  onGetDataFromChildren(): void {
    this.dataFromChildren = this.children.map((item) => item.changedValue);
  }
}
