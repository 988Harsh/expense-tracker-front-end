import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from "ngx-pagination";
import { AuthComponent } from "./auth.component";
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {
        path: '', children: [
            {
                path: '', component: AuthComponent
            },
            {
                path: 'signup', component: SignupComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, FormsModule, NgxPaginationModule],
    declarations: [AuthComponent, SignupComponent],
    exports: [RouterModule],

})
export class AuthModule {

}