import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from "ngx-pagination";
import { ChartsComponent } from "./charts.component";

const routes: Routes = [
    {
        path: '', component: ChartsComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, FormsModule, NgxPaginationModule],
    declarations: [],
    exports: [RouterModule]
})
export class ChartsModule {

}