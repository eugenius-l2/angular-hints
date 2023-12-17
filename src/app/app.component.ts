import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { share, shareReplay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-hints';
  obs$ = this.http.get();

  constructor(public http: HttpService) {}

  ngOnInit(): void {
    // this.http.get().subscribe(console.log);
    // this.http.getWithParameters().subscribe(console.log);
    this.http.getWithRequest().subscribe((event: HttpEvent<any>) => {
      // switch (event.type) {
      //   case HttpEventType.Sent:
      //     console.log('Sent');
      //     break;
      //   case HttpEventType.DownloadProgress:
      //     console.log(`Downloading: ${event.loaded / 1024}Kb`);
      //     break;
      //   case HttpEventType.Response:
      //     console.log('Finished', event.body);
      // }
    });
  }
}
