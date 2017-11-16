import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { WINVMS } from '../data models/mockWinWms';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { of } from 'rxjs/observable/of';

import { Winvm } from '../data models/winvm';

@Injectable()
export class VmsService {

  private _winVmsURL = '../data models/iwinmv.json';
  private _http: HttpClient;
  constructor(/* private _http: HttpClient */) { }

  getWindowVms(): Observable<Winvm[]> {
    return this._http.get<Winvm[]>(this._winVmsURL)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
  }
  getWinVms(): Observable<Winvm[]> {
    return of(WINVMS);
  }
}
