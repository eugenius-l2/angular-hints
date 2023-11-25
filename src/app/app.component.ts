import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-hints';

  activateRoute(e: any, outlet: any): void {
    if (e.log && typeof e.log === 'function') {
      e.log();
    }
    // console.log('activate', e, outlet);
  }

  deactivateRoute(e: any, outlet: any): void {
    // console.log('deactivate', e, outlet);
  }

  onGoToHome(): void {}
}
