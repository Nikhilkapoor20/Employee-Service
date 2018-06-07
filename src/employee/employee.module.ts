import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes, routing } from './employee.routing'
import { EmployeeTable } from "./employee-table/employee.component";
import { PagesComponent } from "./employee.component";
import { CommonModule } from "@angular/common";
import { Filter } from "../../filter.pipe";
import { EmployeeCrud } from "./employee-crud/employee-crud.component";
import { EmployeeService } from "./employee.service";

@NgModule( {
    imports: [
      routing,
      CommonModule,
      FormsModule,
    ],
    declarations: [
      PagesComponent,
      EmployeeTable,
      Filter,
      EmployeeCrud,
    ],
    providers:[
      EmployeeService,
    ]
} )

export class EmployeeModule { }
