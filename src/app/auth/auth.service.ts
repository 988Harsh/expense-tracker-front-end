import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { Observable, Subscription } from "rxjs";
@Injectable({ providedIn: "root" })
export class AuthService {

    authCom: BehaviorSubject<any>;

    constructor(private cookies: CookieService) {
        let cookie;

        if (cookies.check("user")) {
            cookie = cookies.get("user");
        }
        this.authCom = new BehaviorSubject<any>(cookie ? cookie : null);
    }

    login() {
        this.authCom.next("");
    }

    logout() {
        this.authCom.next("");
    }

    check() { return this.authCom.asObservable(); }

}