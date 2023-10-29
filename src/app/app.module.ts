import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InteractionComponent } from './interaction/interaction.component';
import { OnDestroyComponent } from './lifecycles/on-destroy/on-destroy.component';
import { OnChangesComponent } from './lifecycles/on-changes/on-changes.component';
import { LifecyclesComponent } from './lifecycles/lifecycles.component';
import { DoCheckComponent } from './lifecycles/do-check/do-check.component';
import { AfterViewComponent } from './lifecycles/after-view/after-view.component';
import { AfterContentComponent } from './lifecycles/after-content/after-content.component';
import { ChildAfterContentComponent } from './lifecycles/after-content/child-after-content/child-after-content.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { StylingComponent } from './styling/styling.component';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DoCheckComponent,
    StylingComponent,
    DynamicComponent,
    OnDestroyComponent,
    OnChangesComponent,
    AfterViewComponent,
    LifecyclesComponent,
    InteractionComponent,
    AfterContentComponent,
    ChangeDetectionComponent,
    ChildAfterContentComponent,
  ],
})
export class AppModule {}
