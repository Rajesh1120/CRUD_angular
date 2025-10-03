import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeCRUD } from './components/employee-crud/employee-crud';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeCRUD],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EmployeeCurd');
}
