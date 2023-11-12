import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewHostComponent } from './level/components/level-host.component';
import { FeatureModule } from './level/module/feature.module';
import { LevelWithModuleSecondComponent } from './level/module/level-with-module-second.component';
import { DecoratorHostComponent } from './decorators/decorator-host.component';
import { ViewHostComponent } from './view-providers/view-host.component';
import { ViewChildComponent } from './view-providers/view-child.component';
import { VIEW_TOKEN } from './token';

@NgModule({
  declarations: [AppComponent, LevelWithModuleSecondComponent],
  providers: [
    {
      provide: VIEW_TOKEN,
      useValue: 'public',
    },
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverviewHostComponent,
    FeatureModule,
    DecoratorHostComponent,
    ViewHostComponent,
    ViewChildComponent,
  ],
})
export class AppModule {}
