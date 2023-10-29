import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-on-destroy-method',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './on-destroy-method.component.html',
  styleUrls: ['./on-destroy-method.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnDestroyMethodComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    console.log('OnDestroyMethodComponent was initialized');
  }

  ngOnDestroy(): void {
    console.log('OnDestroyMethodComponent was destroyed');
  }
}
