import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-https-client-crud',
  imports: [FormsModule],
  templateUrl: './https-client-crud.html',
  styleUrl: './https-client-crud.css'
})
export class HttpsClientCRUD {
  newUser = {
    id: '',
    name: '',
    username: '',
    email: '',
    role:''
  };
  
  //  user_api_url='https://jsonplaceholder.typicode.com/users';

  user_api_url = 'http://localhost:3000/users';
  
  constructor(private httpClient: HttpClient){}

  usersData: any[]=[];
  loading:boolean=false;

  ngOnInit(){
    this.fetchUsers_FromApi();
    // console.log("hi",this.usersData)
  }
  // a. fetch the data and display in a table (json-server)

  fetchUsers_FromApi(){
    this.loading=true;
    this.httpClient.get(this.user_api_url).subscribe(
      (res:any)=>{
        setTimeout(() => {
          this.usersData=res;
          // console.log(this.usersData)
          this.loading=false;
        }, 1000);
        // this.usersData=res;
        //   console.log(this.usersData)
        //   this.loading=false;
      },
      (err)=>{console.log(err);
      this.loading=false;
      }
      
    );
    
  }
  // c. add 'delete' button against every user, on click 'delete', delete that user

  delete_users(id: number){
    this.flag=""
    const url = `${this.user_api_url}/${id}`; 
    return this.httpClient.delete(url).subscribe(
      (res:any)=> {
        // console.log("delete",res)
        alert(`Employees ${id} Deleted successfully !!!!`)
        this.fetchUsers_FromApi();

        // this.usersData = this.usersData.filter(u => u.id !== id);
        // console.log(this.usersData)
      },(err)=>console.log(err)
    )
  }
flag:string=""
onClickFlag(s:string){
  if(s=='add'){
    this.flag='add'
  }

}
// b. create a form, collect form data and make a post call to add a new user

  onAddEmployee(form : any){
    this.flag='add'
    // console.log(form.value)
    this.httpClient.post(this.user_api_url,form.value).subscribe(
      (res:any)=> {
        // console.log(res);
      //   const newUser=res;
      //  let created = { ...newUser };
      //   this.usersData.push(created);
        // this.usersData.push(this.newUser);
        alert(`Employee ${res.id} Added Successfully`);
        this.fetchUsers_FromApi();
        
        this.newUser = {
          id: '',
          name: '',
          username: '',
          email: '',
          role:''
        };
      }, (err)=> console.log(err));
      this.flag=""
  }
  employeeDetails:any[]=[];
  onViewEmployee(id:any){
    this.flag="view"
    const url = `${this.user_api_url}/${id}`; 
    return this.httpClient.get(url).subscribe(
      (res:any)=>{
        
        this.employeeDetails=[res]
      },(err)=> console.log(err)

    )
    // setTimeout(() => {
    //   this.flag=""
    // }, 2000);
  }
  
  clickOnEdit(emp:any){
    this.flag='edit';
    this.newUser={
      id: emp.id,
      name: emp.name,
      username: emp.username,
      email: emp.email,
      role:emp.role
    }
    // this.newUser=emp;
  }
  onEditEmployee(emp:any){
    const url = `${this.user_api_url}/${this.newUser.id}`; 
    // console.log("wh",emp.value,this.newUser.id)
    this.flag="";
   
    this.httpClient.put(url,emp.value).subscribe(
      (res)=>{
        alert(`Employees ${emp.value.id} Edited successfully !!!!`)
        // const index = this.usersData.findIndex(u => u.id === this.newUser.id);
        // if (index !== -1) {
        //   this.usersData[index] = res;
        // }
        this.fetchUsers_FromApi();
      },(err)=>console.log(err)
    )
    this.newUser = {
      id: '',
      name: '',
      username: '',
      email: '',
      role:''
    };
   
  }

}
