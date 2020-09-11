import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { AuthApi } from '../auth.api.service';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkLogin: Subscription;
  isLoggedIn: boolean = false;
  alert: boolean;

  constructor(private authCom: AuthService, private authApi: AuthApi, private router: Router) { }

  ngOnInit(): void {
    this.authCom.setStatus(false);
    this.alert = false;
    this.checkLogin = this.authCom.check().subscribe((data: any) => {
      if (data !== null) this.isLoggedIn = true;
    })
  }

  login(f: NgForm) {
    let remember = f.value.remember;
    delete f.value.remember;
    this.authApi.login(f.value).subscribe((data: any) => {
      this.alert = false;
      this.authApi.setToken(data.token);
      this.authCom.login(data, remember);
      this.router.navigate(['/']);
    }, (err => {
      this.alert = true;
    }))
  }




  ngOnDestroy() {
    this.checkLogin.unsubscribe();
  }
}
