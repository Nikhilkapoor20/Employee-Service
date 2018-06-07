import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'emp-table',
  templateUrl: './employee-crud.component.html',
})

export class EmployeeCrud {
  opertation: string;
  value: any;
  empDataByID = {
    name: '',
    phone: '',
    address: {
     city: "",
     address_line1: "",
     address_line2: "",
     postal_code: ""
    }
  };

  constructor(private route: ActivatedRoute, private empService: EmployeeService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.empDataByID = this.empService.getData().filter(item => item.id === params['id'])[0];
        this.opertation = 'edit';
      } else {
        this.opertation = 'add';
      }
    });
  }

  submit(form) {
    if(this.opertation === 'edit') {
      this.empService.editData(form)
    } else {
      this.empService.addData(form)
    }
  }
}
