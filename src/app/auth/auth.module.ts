import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from "./auth.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '', children: [
            { path: '', component: LoginComponent },
            { path: 'signup', component: SignupComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, FormsModule],
    declarations: [AuthComponent, SignupComponent, LoginComponent],
    exports: [RouterModule]
})
export class AuthModule {

}