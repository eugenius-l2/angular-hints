import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { Router } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  // providers: [{ provide: APP_BASE_HREF, useValue: '/my/app' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(router: Router) {
    // console.log('Routes', router.config);
  }
}
