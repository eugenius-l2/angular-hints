import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateDrivenComponent {
  model = {
    name: '',
    password: '',
  };

  onSave(data: NgForm): void {
    console.log(data);
  }
}
