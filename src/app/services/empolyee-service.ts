import { Injectable } from '@angular/core';
import { employees } from './demo-components/employees_data';

@Injectable({
  providedIn: 'root'
})
export class EmpolyeeService {
  employeesData:any =employees;
  
  getAllEmployee(){
    return this.employeesData;
  }
  getMaleEmployee(){
    const maleEmployee = this.employeesData.filter((emp:any) => emp.gender.toLowerCase() === 'male');
    return maleEmployee;
  }
  getFemaleEmployee(){
    const femaleEmployee=this.employeesData.filter((emp:any) => emp.gender.toLowerCase() === 'female');
    return femaleEmployee;
  }

  
}
