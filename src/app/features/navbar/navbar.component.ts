import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  navStatusGet: Subscription;
  navstat: boolean;
  checkLogin: Subscription;
  isLoggedIn: boolean = false;
  constructor(private authCom: AuthService) {
  }

  ngOnInit(): void {
    this.navStatusGet = this.authCom.getStatus().subscribe((navstat: boolean) => {
      this.navstat = navstat;
    })

    this.checkLogin = this.authCom.check().subscribe((data: any) => {
      if (data !== null) this.isLoggedIn = true;
      else this.isLoggedIn = false;
    })
  }

  logout() {
    this.authCom.logout();
  }

}
