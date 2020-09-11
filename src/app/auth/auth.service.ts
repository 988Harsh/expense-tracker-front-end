import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { CookieService } from "ngx-cookie-service";
@Injectable({ providedIn: "root" })
export class AuthService {

    authCom: BehaviorSubject<any>;
    isSigningUp = true;
    isLoggedIn = false;
    constructor(private cookies: CookieService) {
        let cookie;
        if (cookies.check("user")) {
            cookie = JSON.parse(cookies.get("user"));
        }
        this.authCom = new BehaviorSubject<any>(cookie ? cookie : null);
    }

    navStatus = new Subject<boolean>();

    setStatus(status) {
        this.navStatus.next(status);
    }

    getStatus() {
        return this.navStatus.asObservable();
    }

    login(data: any, remember: boolean) {
        if (remember) this.cookies.set("user", JSON.stringify(data));
        this.authCom.next(data);
    }

    logout() {
        if (this.cookies.check("user")) this.cookies.delete("user");
        this.authCom.next(null);
    }

    check() { return this.authCom.asObservable(); }

}