import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnDestroyMethodComponent } from './on-destroy-method/on-destroy-method.component';
import { OnDestroyRefComponent } from './on-destroy-ref/on-destroy-ref.component';

@Component({
  selector: 'app-on-destroy',
  standalone: true,
  imports: [CommonModule, OnDestroyMethodComponent, OnDestroyRefComponent],
  templateUrl: './on-destroy.component.html',
  styleUrls: ['./on-destroy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnDestroyComponent {
  isShown: boolean = false;

  onToggle(): void {
    this.isShown = !this.isShown;
  }
}
