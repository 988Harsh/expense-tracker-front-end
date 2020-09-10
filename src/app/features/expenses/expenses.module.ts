import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from "ngx-pagination";
import { ExpensesComponent } from "./expenses.component";

const routes: Routes = [
    {
        path: '', component: ExpensesComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, FormsModule, NgxPaginationModule],
    declarations: [ExpensesComponent],
    exports: [RouterModule]
})
export class ExpensesModule {

}