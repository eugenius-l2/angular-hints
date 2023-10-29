import {
  ChangeDetectionStrategy,
  Component,
  NgZone,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdChildIComponent } from './cd-child-i/cd-child-i.component';
import { CdChildIIComponent } from './cd-child-ii/cd-child-ii.component';
import { FormsModule } from '@angular/forms';

export class TimeChecker {
  getTime(): Date {
    return new Date();
  }
}

@Component({
  selector: 'app-change-detection',
  standalone: true,
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CdChildIComponent, CdChildIIComponent, FormsModule],
})
export class ChangeDetectionComponent implements OnInit {
  value: string = '';
  timeChecker = new TimeChecker();

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    // setInterval(() => {}, 1000);
    // this.ngZone.runOutsideAngular(() => {
    //   setInterval(() => {}, 1000);
    // });
  }
}
