import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { allowedNodeEnvironmentFlags } from 'process';
import { environment } from "../../../environments/environment";
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class ExpensesApi {

    token: string;
    server: string = environment.server;

    constructor(private http: HttpClient, private authCom: AuthService) {
        this.authCom.check().subscribe((data: any) => {
            if (data !== null) this.setToken(data.token);
        })
    }

    setToken(token) {
        this.token = token;
    }

    getToken() {
        return this.token;
    }

    public getExpenses(page: number) {
        return this.http.get(`${this.server}/api/expenses?page=${page}`);
    }

    public getExpensesAll() {
        return this.http.get(`${this.server}/api/expensesAll`);
    }

    public getExpense(id) {
        return this.http.get(`${this.server}/api/expenses/${id}`);
    }

    public getCategories() {
        return this.http.get(`${this.server}/api/categories`);
    }

    public updateExpense(body) {
        return this.http.put(`${this.server}/api/expenses`, body);
    }

    public addExpense(body) {
        return this.http.post(`${this.server}/api/expenses`, body);
    }

    public deleteExpense(id) {
        return this.http.delete(`${this.server}/api/expenses/${id}`);
    }
}