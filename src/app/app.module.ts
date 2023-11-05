import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgXxxComponent } from './ng-xxx/ng-xxx.component';
import {
  ColorBoldDirective,
  CompositionComponent,
} from './directives/composition/composition.component';
import { CustomNgifComponent } from './directives/structural/custom-ngif/custom-ngif.component';
import { CustomNgforComponent } from './directives/structural/custom-ngfor/custom-ngfor.component';
import { ExportAsComponent } from './directives/export-as/export-as.component';
import { TrackByComponent } from './track-by/track-by.component';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgXxxComponent,
    CompositionComponent,
    ColorBoldDirective,
    CustomNgifComponent,
    CustomNgforComponent,
    ExportAsComponent,
    TrackByComponent,
  ],
})
export class AppModule {}
