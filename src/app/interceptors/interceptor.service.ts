import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UserService } from '../services/user.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authService = this.injector.get(UserService);
    const headers = new HttpHeaders({
      'x-token': authService.getToken()
    });
    const reqClone = req.clone({
      headers
    });
    return next.handle(reqClone).pipe(
      catchError( this.driveError )
    );
  }

  private driveError(error: HttpErrorResponse) {
    return throwError('Hubo un error: ' + error);
  }
}
