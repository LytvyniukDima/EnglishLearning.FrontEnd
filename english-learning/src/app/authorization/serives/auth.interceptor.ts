import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler){
        var token = localStorage.getItem('token');
    
        if (token)
            req = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`)
        }) 

        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                    let newToken = event.headers.get('Authorization');
                    console.log(`new token ${newToken}`)
                    if (newToken) {
                        newToken = newToken.split(' ')[1];
                        if (newToken) {
                            localStorage.setItem('token', newToken);
                        }
                    }
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                let data = {};
                data = {
                    reason: error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };

                if (error.status === 401) {
                    this.router.navigate(['/sign_in']);
                    return;
                }

                return throwError(error);
            }));
    }
}
