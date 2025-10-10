import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeCRUD } from './components/employee-crud/employee-crud';
import { DemoComponents } from './services/demo-components/demo-components';
import { EmployeeComponent } from './services/employee-component/employee-component';
import { Httpdemo1 } from './components/httpdemo1/httpdemo1';
import { HttpsClientCRUD } from './components/https-client-crud/https-client-crud';
import { Demo2Observable } from './components/demo2-observable/demo2-observable';
import { Observabledemo3 } from './components/observabledemo3/observabledemo3';
import { Subjectdemo } from './components/subjectdemo/subjectdemo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Subjectdemo,Observabledemo3,HttpsClientCRUD,Demo2Observable,EmployeeCRUD, DemoComponents, Httpdemo1, EmployeeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EmployeeCurd');
}
