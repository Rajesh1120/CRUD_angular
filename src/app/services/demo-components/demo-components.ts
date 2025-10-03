import { Component } from '@angular/core';
import { DemoService } from '../demo-service';
@Component({
  selector: 'app-demo-components',
  imports: [],
  templateUrl: './demo-components.html',
  styleUrl: './demo-components.css'
})
export class DemoComponents {
  constructor(private clockService: DemoService ){}
  ngOnInit(){
    console.log("calling method", this.clockService.getFullTimestamp())
  }
}


// export const employees = [
//   { id: 1, name: "Alice Johnson",   gender: "Female", role: "Software Engineer", department: "IT", salary: 85000 },
//   { id: 2, name: "Bob Smith",       gender: "Male",   role: "Project Manager",   department: "Operations", salary: 95000 },
//   { id: 3, name: "Charlie Brown",   gender: "Male",   role: "UI/UX Designer",    department: "Design", salary: 72000 },
//   { id: 4, name: "Diana Prince",    gender: "Female", role: "QA Engineer",       department: "Testing", salary: 68000 },
//   { id: 5, name: "Ethan Davis",     gender: "Male",   role: "DevOps Engineer",   department: "Infrastructure", salary: 90000 },
//   { id: 6, name: "Fiona Carter",    gender: "Female", role: "Business Analyst",  department: "Business", salary: 78000 },
//   { id: 7, name: "George Miller",   gender: "Male",   role: "Database Admin",    department: "IT", salary: 87000 },
//   { id: 8, name: "Hannah Wilson",   gender: "Female", role: "HR Specialist",     department: "HR", salary: 65000 },
//   { id: 9, name: "Ian Thompson",    gender: "Male",   role: "Data Scientist",    department: "Analytics", salary: 105000 },
//   { id: 10, name: "Julia Roberts",  gender: "Female", role: "Product Owner",     department: "Management", salary: 110000 }
// ];
