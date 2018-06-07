import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { EmployeeModule } from '../employee/employee.module';
import { RouterModule } from '@angular/router';
import { routes, routing } from '../route';
import { PagesComponent } from '../employee/employee.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    EmployeeModule,
    RouterModule,
    routing,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
