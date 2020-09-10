import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from "ngx-pagination";
import { HomeComponent } from "./home.component";

const routes: Routes = [
    {
        path: '', component: HomeComponent, pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, FormsModule, NgxPaginationModule],
    declarations: [HomeComponent],
    exports: [RouterModule]
})
export class HomeModule {

}