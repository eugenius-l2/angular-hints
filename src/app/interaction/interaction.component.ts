import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingComponent } from './binding/binding.component';
import { ContentComponent } from './content/content.component';
import { ViewComponent } from './view/view.component';
import { ChildContentComponent } from './content/child-content/child-content.component';

@Component({
  selector: 'app-interaction',
  standalone: true,
  templateUrl: './interaction.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    BindingComponent,
    ContentComponent,
    ViewComponent,
    ChildContentComponent,
  ],
})
export class InteractionComponent {}
