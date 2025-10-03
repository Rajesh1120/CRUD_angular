import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeCRUD } from './components/employee-crud/employee-crud';
import { DemoComponents } from './services/demo-components/demo-components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeCRUD, DemoComponents],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EmployeeCurd');
}
