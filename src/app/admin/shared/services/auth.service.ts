import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../../shared/interfaces';
import {Observable} from 'rxjs';

// {providedIn: 'root'} needs only when service must be in root module
@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {

  }

  get token(): string {
    return '';
  }

  login(user: User): Observable<any> {
    this.http.post('', user);
  }

  logout(): void {

  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(): void {

  }
}
