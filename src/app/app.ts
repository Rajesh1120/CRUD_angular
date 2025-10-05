import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeCRUD } from './components/employee-crud/employee-crud';
import { DemoComponents } from './services/demo-components/demo-components';
import { EmployeeComponent } from './services/employee-component/employee-component';
import { Httpdemo1 } from './components/httpdemo1/httpdemo1';
import { HttpsClientCRUD } from './components/https-client-crud/https-client-crud';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpsClientCRUD,EmployeeCRUD, DemoComponents, Httpdemo1, EmployeeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EmployeeCurd');
}
