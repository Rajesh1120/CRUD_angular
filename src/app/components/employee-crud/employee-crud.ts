import { Component } from '@angular/core';
import { EmployeeTable } from '../employee-table/employee-table';
import { EmployeeAdd } from '../employee-add/employee-add';

@Component({
  selector: 'app-employee-crud',
  imports: [EmployeeTable,EmployeeAdd],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css'
})
export class EmployeeCRUD {
  
  employees = [
    { id: 1, name: 'John', role: 'Manager', salary: 85000, status: 'Active' },
    { id: 2, name: 'Alice', role: 'Developer', salary: 45000, status: 'Active' },
    { id: 3, name: 'Bob', role: 'Tester', salary: 30000, status: 'Inactive' },
    { id: 4, name: 'Eve', role: 'HR', salary: 40000, status: 'Active' },
  ];
 
  copyEmployees = [...this.employees];
  viewMode:boolean=false
  Added:boolean=false
  selectedEmp: any = null;
  onClickView(id: number) {
    this.viewMode=true
    this.Added=false
    this.selectedEmp = this.copyEmployees.find((emp) => emp.id === id);
    console.log(this.viewMode)
  }
  onClickDelete(id: number) {
    this.viewMode=false
    this.copyEmployees = this.copyEmployees.filter((emp) => emp.id !== id);
    }
    newEmp={
      name:'',
      role:'',
      salary:0,
      status:''
    }
    onAddEmployee(form : any){
      console.log(form.value)
      const newEmp = {
        // id: this.copyEmployees.length+1,
        id: this.copyEmployees.length
            ? Math.max(...this.copyEmployees.map((e) => e.id)) + 1
            : 1,
        ...this.newEmp,
      };
      this.copyEmployees.push(newEmp);
      this.newEmp = { name: '', role: '', salary: 0, status: '' };
      
      
    }
  }

