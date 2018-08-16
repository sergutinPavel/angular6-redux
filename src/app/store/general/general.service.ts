import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {map} from 'rxjs/internal/operators';

@Injectable()
export class GeneralService {
  constructor(private _httpClient: HttpClient) {}

  getTestData(): Observable<any> {
    return this._httpClient.get(`${environment.test_api}/api/images/get?format=src`).pipe(map(res => res));
  }
}
