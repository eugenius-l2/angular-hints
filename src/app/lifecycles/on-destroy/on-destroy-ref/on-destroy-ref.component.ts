import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-on-destroy-ref',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './on-destroy-ref.component.html',
  styleUrls: ['./on-destroy-ref.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnDestroyRefComponent implements OnInit {
  destroyRef = inject(DestroyRef);

  constructor() {}

  ngOnInit(): void {
    console.log('OnDestroyRefComponent was initialized');

    const unregisterFn = this.destroyRef.onDestroy(() => {
      console.log('OnDestroyRefComponent was destroyed');
    });

    // stop the destroy callback from executing if needed
    // unregisterFn();
  }
}
