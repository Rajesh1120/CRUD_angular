import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-httpdemo1',
  imports: [],
  templateUrl: './httpdemo1.html',
  styleUrl: './httpdemo1.css'
})
export class Httpdemo1 {
  user_api_url='https://jsonplaceholder.typicode.com/users';
  
  
  constructor(private httpClient: HttpClient){}
  
  
  ngOnInit(){
    this.fetchUsers_javascript()
    this.fetchUsers_angular()
  }
  fetchUsers_javascript(){
    fetch(this.user_api_url)
  .then(res => res.json()) // convert to JSON
  .then(data => console.log("data",data)) // now you can see actual data
  .catch(err => console.error(err));
  }
  fetchUsers_angular(){ //observable = elder brother of promises
    this.httpClient.get(this.user_api_url,{observe:'response'}).subscribe(
      (res)=>console.log(res),
      (err)=>console.log(err)
    );

  }
}

