import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface IUser {
  name: string;
  age: string;
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get(): Observable<IUser> {
    return this.http.get<IUser>('/assets/data.json');
  }

  getWithParameters(): Observable<IUser> {
    const params = new HttpParams().set('id', 156);

    return this.http.get<IUser>('/assets/data.json', {
      params,
      headers: { authorize: 'true' },
    });
  }

  getWithRequest(): Observable<any> {
    const req = new HttpRequest('GET', '/assets/sample-30s.mp4', {
      reportProgress: true,
      responseType: 'blob',
    });

    return this.http.request(req);
  }
}
