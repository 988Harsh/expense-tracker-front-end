import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpensesApi } from '../expenses.api';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-or-edit-expense',
  templateUrl: './add-or-edit-expense.component.html',
  styleUrls: ['./add-or-edit-expense.component.css']
})
export class AddOrEditExpenseComponent implements OnInit {

  isEditing = false;
  expense;
  categories;
  constructor(private route: ActivatedRoute, privaterouter: Router, private exApi: ExpensesApi, private router: Router) {
    this.expense = { description: '', amount: 0 }

  }

  ngOnInit(): void {
    this.exApi.getCategories().subscribe(data => {
      this.categories = data;
    });

    this.route.queryParams.subscribe(params => {
      this.isEditing = params['isEditing'];
      if (params['isEditing']) {
        this.route.params.subscribe(params => {
          this.exApi.getExpense(params['id']).subscribe(data => {
            this.expense = data;
            this.categories = { type: this.expense.type }
          }, err => {

          })
        })

      }
    })
  }

  onSubmit(f: NgForm) {
    if (this.isEditing) {
      let newEx = { ...f.value, id: this.expense.id }
      this.exApi.updateExpense(newEx).subscribe((data) => {
        console.log(data);
        this.router.navigate(["/expenses"], { preserveQueryParams: true });
      })
    } else {
      this.exApi.addExpense(f.value).subscribe((data) => {
        console.log(data);
        this.router.navigate(["/expenses"], { queryParams: { page: this.route.queryParams['page'] } });
      })
    }
  }


}
