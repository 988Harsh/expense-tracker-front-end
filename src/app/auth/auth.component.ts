import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private authCom: AuthService) { }

  ngOnInit(): void {
    this.authCom

  }

}
