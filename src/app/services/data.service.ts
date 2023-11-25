import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getData(): Observable<string> {
    return of('data').pipe(delay(2000));
  }
}
