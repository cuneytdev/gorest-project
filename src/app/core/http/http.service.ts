import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  mergeMap as _observableMergeMap,
  catchError as _observableCatch,
} from 'rxjs/operators';
import {
  throwError as _observableThrow,
  of as _observableOf,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  request(type: string, url: string, body?: any) {
    let options_: any = {
      body: body,
      observe: 'response',
      responseType: "json",
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: '*/*',
      }),
    };
    return this.http.request(type, url, options_).pipe(
      _observableMergeMap((response_: any) => {
        if (response_ instanceof HttpResponse) {
          const result = response_.body;
          return _observableOf(result);
        }
      })
    );
  }
}
