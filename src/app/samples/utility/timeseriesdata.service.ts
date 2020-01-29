import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { tap, retry, catchError } from 'rxjs/operators'
import { throwError } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class TimeseriesdataService {

  constructor(private _http: HttpClient) { }

  getTimeseriesdata() {
    return this._http.get(`${environment.apiBaseUrl}/loraDevice1`)
      .pipe(
        tap(data => console.log(data)),
        retry(3),//(on failur of ajax call ) autometically retry 3 times
        catchError(this.handleError)
      );
  }
  gettoken() {
    return this._http.get(`${environment.apiToken}`)
      .pipe(
        tap(data => console.log(data)),
        retry(3),//(on failur of ajax call ) autometically retry 3 times
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}


