import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
    { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
    { path: 'charts', loadChildren: () => import('./features/charts/charts.module').then(m => m.ChartsModule) },
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: 'expenses', loadChildren: () => import('./features/expenses/expenses.module').then(m => m.ExpensesModule) }
]

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(appRoutes, {
        initialNavigation: 'enabled'
    }), FormsModule],
    exports: [RouterModule]
})
export class AppRoutingModule {

}