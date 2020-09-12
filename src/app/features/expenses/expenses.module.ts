import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from "ngx-pagination";
import { ListExpensesComponent } from "./list-expenses/list-expenses.component";
import { AddOrEditExpenseComponent } from "./add-or-edit-expense/add-or-edit-expense.component";
import { AuthGuard } from "../../auth/auth.guard";
import { ExpensesApi } from "./expenses.api";

const routes: Routes = [
    {
        path: '', canActivate: [AuthGuard], children: [
            { path: '', component: ListExpensesComponent },
            { path: 'add', component: AddOrEditExpenseComponent },
            { path: 'edit/:id', component: AddOrEditExpenseComponent }
        ],
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, FormsModule, NgxPaginationModule],
    declarations: [ListExpensesComponent, AddOrEditExpenseComponent],
    exports: [RouterModule],
    providers: [ExpensesApi]
})
export class ExpensesModule {

}