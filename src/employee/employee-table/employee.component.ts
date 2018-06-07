import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'emp-table',
  templateUrl: './employee.component.html',
})

export class EmployeeTable implements OnInit {
  employeeData: any = [];
  constructor(public employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employeeData = this.employeeService.getData();
  }
  isNumber(data) {
    data = Number(data);
    return data !== data ? 'NA' : data;
  }
}
