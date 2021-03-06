import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthApi } from '../auth/auth.api.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
    token: string;


    constructor(private authApi: AuthApi) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.token = this.authApi.getToken();
        console.log("In interceptor", this.token);
        request = request.clone({ headers: request.headers.set('Authorization', `Bearer ${this.token}`) });
        console.log(request);
        return next.handle(request);
    }

}