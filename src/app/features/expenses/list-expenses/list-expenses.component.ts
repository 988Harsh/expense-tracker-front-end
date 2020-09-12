import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExpensesApi } from '../expenses.api';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit {

  getExpenses: Subscription;
  alert: boolean = false;
  expenses = [];
  config;
  page: number;
  sub: Subscription;
  constructor(private exApi: ExpensesApi, private router: Router, private route: ActivatedRoute) {
    this.config = {
      id: 'tasksPagination',
      currentPage: 1,
      itemsPerPage: 3,
      totalItems: 0
    }
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(
      params => {
        this.config.currentPage = params['page'] ? params['page'] : 1;
        this.page = this.config.currentPage
        this.exApi.getExpenses(this.page).subscribe((data: any) => {
          // console.log(data.count, " ", data.tasks);
          let pages = Math.ceil(data.count / this.config.itemsPerPage);
          if (this.page <= pages) {
            this.alert = false;
            this.expenses = data.ex;
            this.config.totalItems = data.count;
          }
          else {
            if (this.page !== 1) {
              this.alert = true;
            }
          }

        });
      });
  }

  pageChange(newPage: number) {
    this.router.navigate(['/expenses'], { queryParams: { page: newPage } });
  }

  onEdit(id: number) {
    this.router.navigate(['/expenses/edit', id], { queryParams: { isEditing: true, page: this.page } });
  }

  onAdd() {
    this.router.navigate(['/expenses/add'], { queryParams: { isEditing: false, page: this.page } });
  }

  onDelete(id) {
    this.exApi.deleteExpense(id).subscribe((data) => {
      console.log(data);
      let index = this.expenses.findIndex(expense => expense.id === id);
      this.expenses.splice(index, 1);
      if (index % 3 === 0) this.page = this.page - 1;
      this.router.navigate(['/expenses'], { queryParams: { page: this.page } })
    })
  }

}
