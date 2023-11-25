import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-params',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParamsComponent {
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((res) => console.log('query params', res));
    this.route.params.subscribe((res) => console.log('params', res));
    this.route.fragment.subscribe((res) => console.log('fragment', res));
  }
}
