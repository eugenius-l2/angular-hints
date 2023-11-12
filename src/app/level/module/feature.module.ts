import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewWithModuleComponent } from './level-with-module.component';
import { LevelWithModuleHostComponent } from './level-with-module-host.component';
import { CounterService } from '../counter.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OverviewWithModuleComponent, LevelWithModuleHostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LevelWithModuleHostComponent,
      },
    ]),
  ],
  exports: [LevelWithModuleHostComponent],
  providers: [CounterService],
})
export class FeatureModule {}
