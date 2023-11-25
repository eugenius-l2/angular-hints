import { NgModule, inject } from '@angular/core';
import {
  Route,
  RouterModule,
  Routes,
  UrlMatchResult,
  UrlSegment,
  UrlSegmentGroup,
} from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FeatureComponent } from './components/feature/feature.component';
import { NestedComponent } from './components/nested/nested.component';
import { SecondComponent } from './components/second/second.component';
import { MatcherComponent } from './components/matcher/matcher.component';
import { ParamsComponent } from './components/params/params.component';
import { DataService } from './services/data.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'feature',
    component: FeatureComponent,
    resolve: { data: () => inject(DataService).getData() },
    canDeactivate: [(component: FeatureComponent) => component.canDeactivate()],
  },
  {
    path: 'nested',
    component: NestedComponent,
  },
  {
    path: 'second',
    component: SecondComponent,
    outlet: 'second',
  },
  {
    path: 'params',
    component: ParamsComponent,
  },
  {
    path: 'params/:id',
    component: ParamsComponent,
  },
  {
    component: MatcherComponent,
    matcher: (
      url: UrlSegment[],
      group: UrlSegmentGroup,
      route: Route
    ): UrlMatchResult | null => {
      // console.log(url, group, route);
      return url.length === 1 && url[0].path.includes('match')
        ? { consumed: url }
        : null;
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // scrollPositionRestoration: 'enabled', // or 'top'
      // anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
