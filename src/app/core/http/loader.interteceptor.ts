import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from 'src/app/components/loader/loader.service';

@Injectable({
    providedIn: 'root'
})
export class LoaderInterceptor implements HttpInterceptor{
    constructor(private loaderService: LoaderService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.setloading(true);
        return next
          .handle(req)
          .pipe(
            finalize(() => this.loaderService.setloading(false))
          )
    }
}