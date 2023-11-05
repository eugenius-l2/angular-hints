import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-xxx',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-xxx.component.html',
  styleUrls: ['./ng-xxx.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgXxxComponent {
  // ng-template
  isTemplateShown: boolean = true;
  itemData = {
    name: 'Jack',
  };

  // ng-container
  list: number[] = [1, 2, 3, 4, 5];
}
