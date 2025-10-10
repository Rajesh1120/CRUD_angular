import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { concatMap, exhaustMap, forkJoin, from, fromEvent, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-demo2-observable',
  imports: [],
  templateUrl: './demo2-observable.html',
  styleUrl: './demo2-observable.css'
})
export class Demo2Observable {
  loginBtn: any;
      constructor(private httpClient: HttpClient){}
      ngOnInit(){
        // this.forkjoin_demo();
        // this.mergemap_demo();
        this.concat_demo();
      }
      forkjoin_demo(){
        let request=this.httpClient.get('https://jsonplaceholder.typicode.com/users');
        let request2=this.httpClient.get('https://jsonplaceholder.typicode.com/comments');
        forkJoin([request, request2]).subscribe(resp=>{
          console.log("hi", resp);
        }, err=>{
          console.log(err);
        })
      }
      mergemap_demo(){
        // outer observable

        let movieArr=[
          {
            "id": 1,
            "title": "Inception",
            "year": 2010,
            "genre": ["Sci-Fi", "Thriller"],
        
            "director": "Christopher Nolan",
            "duration": 148,
            "language": "English"
          },
          {
            "id": 2,
            "title": "Interstellar",
            "year": 2014,
            "genre": ["Sci-Fi", "Adventure", "Drama"],
            
            "director": "Christopher Nolan",
            "duration": 169,
            "language": "English"
          },
          {
            "id": 3,
            "title": "The Dark Knight",
            "year": 2008,
            "genre": ["Action", "Crime", "Drama"],
            "rating": 9.0,
            "director": "Christopher Nolan",
            "duration": 152,
            "language": "English"
          },
         
    ]
    let moviesPublisher =from(movieArr); 
    moviesPublisher.pipe(mergeMap(movieObj=>{
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${movieObj.id}`)
    })).subscribe(imdbRespons=>{
      console.log(imdbRespons)
    })
    


}
concat_demo(){
  // outer observable

  let movieArr=[
    {
      "id": 1,
      "title": "Inception",
      "year": 2010,
      "genre": ["Sci-Fi", "Thriller"],
  
      "director": "Christopher Nolan",
      "duration": 148,
      "language": "English"
    },
    {
      "id": 2,
      "title": "Interstellar",
      "year": 2014,
      "genre": ["Sci-Fi", "Adventure", "Drama"],
      
      "director": "Christopher Nolan",
      "duration": 169,
      "language": "English"
    },
    {
      "id": 3,
      "title": "The Dark Knight",
      "year": 2008,
      "genre": ["Action", "Crime", "Drama"],
      "rating": 9.0,
      "director": "Christopher Nolan",
      "duration": 152,
      "language": "English"
    },
   
]
  let moviesPublisher =from(movieArr); 
  moviesPublisher.pipe(concatMap(movieObj=>{
  return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${movieObj.id}`)
  })).subscribe(imdbRespons=>{
  console.log("djjf",imdbRespons)
  })



  // ngAfterViewInit(){
    
  //   fromEvent(this.loginBtn.nativeElement, 'click').pipe(exhaustMap(val)=>{
  //     return this.httpClient.get('https://fakestoreapi.com/products')
  //   }).subscribe({
  //     next:(res:any)=>console.log(res),
  //     error:(err:any)=> console.error(err)
  //   });
  // }





}
}
function ngAfterViewInit() {
  throw new Error('Function not implemented.');
}

function subscribe(arg0: { next: (res: any) => void; error: (err: any) => void; }) {
  throw new Error('Function not implemented.');
}

