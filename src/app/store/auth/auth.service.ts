import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {map} from 'rxjs/internal/operators';

@Injectable()
export class AuthService {
  constructor(private _httpClient: HttpClient) {}

  signIn(email: string, password: string): Observable<any> {
    console.warn('AuthService signIn', {email, password});
    return this._httpClient.post(`${environment.api_endpoint}/login`, {email, password})
      .pipe(map(res => res));
  }
}
