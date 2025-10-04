import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeCRUD } from './components/employee-crud/employee-crud';
import { DemoComponents } from './services/demo-components/demo-components';
import { EmployeeComponent } from './services/employee-component/employee-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeCRUD, DemoComponents, EmployeeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EmployeeCurd');
}
