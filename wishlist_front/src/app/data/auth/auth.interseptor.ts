import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { DataService } from '../services/data-sharing.service';
import { inject } from '@angular/core';

export const authTokenInterseptor = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const token = localStorage.getItem('accessToken');
  if (!token) return next(req);
  const dataService = inject(DataService);
  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
      // "ngrok-skip-browser-warning": "69420"
    },
  });
  return next(req).pipe(
    catchError(error => {
      dataService.changeAlert(error?.statusText || 'Произошла ошибка');
      return throwError(error);
    })
  );
};
