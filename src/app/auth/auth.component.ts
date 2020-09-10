import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit, OnDestroy {

  isLoggedIn: boolean;
  constructor(private authCom: AuthService) { }

  ngOnInit(): void {
    this.authCom

  }

  ngOnDestroy() {
  }

}
