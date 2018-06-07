import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './employee.component';
import { ModuleWithProviders } from '@angular/core';
import { EmployeeTable } from './employee-table/employee.component';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'employee',
    component: PagesComponent,
    children: [
      { path: '', component: EmployeeTable },
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
