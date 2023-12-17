import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpEventType,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          console.log('response');
        }
        if (event.type === HttpEventType.DownloadProgress) {
          console.log(`Downloading: ${event.loaded / 1024}Kb`);
        }
      }),
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          console.log('error', err);
        }
        return of(err);
      })
    );
  }
}
