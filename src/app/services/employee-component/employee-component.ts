import { Component } from '@angular/core';
import { EmpolyeeService } from '../empolyee-service';
import { FormsModule } from '@angular/forms';
// import { employees } from '../demo-components/employees_data';

@Component({
  selector: 'app-employee-component',
  imports: [FormsModule],
  templateUrl: './employee-component.html',
  styleUrl: './employee-component.css'
})
export class EmployeeComponent {
  // employeesData:any=employees
  selectDropDown:string="All";
  toggleFlag!:boolean;
  toggleFun(){
    this.toggleFlag=!this.toggleFlag
  }
  
  constructor(private employeeService: EmpolyeeService ){}

  data:any;
  fun(selectDropDown:string){
    if(selectDropDown === "All"){
      this.data=this.employeeService.getAllEmployee();
      console.log(this.data)
    }
    else if(selectDropDown ==="Male"){
      
      this.data=this.employeeService.getMaleEmployee();
      console.log(this.data)
    }
    else{
      this.data=this.employeeService.getFemaleEmployee();
      console.log(this.data)
    }
  }

  ngOnInit(){
    this.data=this.employeeService.getAllEmployee();
    
  }
  
}
