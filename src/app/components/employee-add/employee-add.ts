import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  imports: [FormsModule],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.css',
  inputs:['newEmp'],
  outputs:['addEvent']

})
export class EmployeeAdd {
  newEmp:any;
 
  addEvent=new EventEmitter();
  onAddEmployee(emp:any){
    this.addEvent.emit(emp);
  }
 
  
}
