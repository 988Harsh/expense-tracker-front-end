import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from '../../environments/environment.prod';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthApi {

    token: string;
    server: string = environment.server;

    constructor(private http: HttpClient, private authCom: AuthService) {
        this.authCom.check().subscribe((data: any) => {
            if (data !== null) this.setToken(data.token);
        })
    }

    setToken(token) {
        this.token = token;
    }

    getToken() {
        return this.token;
    }

    public login(credentials) {
        return this.http.post(`${this.server}/authenticate`, credentials);
    }

    public signup(user) {
        return this.http.post(`${this.server}/register`, user);
    }


}