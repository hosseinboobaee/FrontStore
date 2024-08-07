import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomainName } from './PathTools';

export const EshopInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const token = localStorage.getItem('eShopAngular');
  const myRequest = req.clone({
    url: DomainName + req.url,
    headers: req.headers.append('Authorization', 'Bearer ' + token),
  });

  return next(myRequest);
};
