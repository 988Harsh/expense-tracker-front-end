import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Observable, Subscription } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
    userState: Subscription;
    constructor(private authService: AuthService, private router: Router, private authCom: AuthService) { }
    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> | UrlTree {


        return this.authCom.check().pipe(map(data => {
            if (data !== null) return true;
            else this.router.navigate(['/auth']);
        }));

    }
}