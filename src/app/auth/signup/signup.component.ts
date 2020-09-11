import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { AuthApi } from '../auth.api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  alert: boolean;
  constructor(private authCom: AuthService, private authApi: AuthApi, private router: Router) { }

  ngOnInit(): void {
    this.authCom.setStatus(true);
    this.alert = false;
  }

  signup(f: NgForm) {
    console.log(f.value);
    this.authApi.signup(f.value).subscribe((data: any) => {
      this.alert = false;
      this.authApi.setToken(data.token);
      this.authCom.login(data, false);
      this.router.navigate(['/']);
    }, (err => {
      this.alert = true;
    }))
  }


}
