import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieService } from "ngx-cookie-service";

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { AuthService } from "./auth/auth.service";
import { ChartsComponent } from './features/charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChartsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CookieService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
