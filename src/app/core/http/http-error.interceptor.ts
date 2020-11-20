import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService } from 'src/app/components/alert/alert.service';
import { Alert } from 'src/app/models/alert.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class ErrorHandlerInterceptor implements HttpInterceptor {
    constructor(private alertService: AlertService) {
    }
  
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(catchError(error => this.errorHandler(error)));
    }
      private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {
      if (response instanceof HttpErrorResponse) {
        const alert: Alert ={
            message: response.error.message,
            timeout: 2000,
            type: 'danger'

        }
        this.alertService.showAlert(alert);
      }
      throw response;
    }
  
  }
  