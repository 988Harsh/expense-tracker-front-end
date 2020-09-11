import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditExpenseComponent } from './add-or-edit-expense.component';

describe('AddOrEditExpenseComponent', () => {
  let component: AddOrEditExpenseComponent;
  let fixture: ComponentFixture<AddOrEditExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrEditExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
