import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './employee.component';
import { ModuleWithProviders } from '@angular/core';
import { EmployeeTable } from './employee-table/employee.component';
import { EmployeeCrud } from './employee-crud/employee-crud.component';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'employee',
    component: PagesComponent,
    children: [
      { path: '', component: EmployeeTable },
      {path: 'edit/:id', component: EmployeeCrud },
      {path: 'add', component: EmployeeCrud },
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
