import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureComponent {
  isSave = false;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data) => console.log('data', data));
  }

  onSave(): void {
    this.isSave = true;
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (!this.isSave) {
      return confirm('Are you sure?');
    } else {
      return true;
    }
  }
}
