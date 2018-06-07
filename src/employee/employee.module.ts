import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes, routing } from './employee.routing'
import { EmployeeTable } from "./employee-table/employee.component";
import { PagesComponent } from "./employee.component";
import { CommonModule } from "@angular/common";

@NgModule( {
    imports: [
      routing,
      CommonModule,
    ],
    declarations: [
      PagesComponent,
      EmployeeTable,
    ],
} )

export class EmployeeModule { }
