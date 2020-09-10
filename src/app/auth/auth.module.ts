import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from "ngx-pagination";
import { AuthComponent } from "./auth.component";

const routes: Routes = [
    {
        path: '', component: AuthComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, FormsModule, NgxPaginationModule],
    declarations: [AuthComponent],
    exports: [RouterModule],

})
export class AuthModule {

}