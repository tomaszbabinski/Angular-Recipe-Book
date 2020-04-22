import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface AuthResponseData {
  idToken: string;
  email: string;
  resfreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string) {
    // tslint:disable-next-line: max-line-length
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]',
      {
        email,
        password,
        returnSecuretoken: true
      }).pipe(
        catchError(this.handleError)
      );
  }

  login(email: string, password: string) {
    // tslint:disable-next-line: max-line-length
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]',
      {
        email,
        password,
        returnSecuretoken: true
      }).pipe(catchError(this.handleError));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist!';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'The password is not correct';
    }
    return throwError(errorMessage);
  }
}
