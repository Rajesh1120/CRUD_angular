import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subjectdemo',
  imports: [],
  templateUrl: './subjectdemo.html',
  styleUrl: './subjectdemo.css'
})
export class Subjectdemo {
  ngOnInit(){
    this.lets_learn_subject();
  }
  lets_learn_subject(){
    let mySubject=new Subject();
    mySubject.next('AAAAA'); // AAAA is published
    mySubject.subscribe(val=>console.log('Subscriber-1 ', val)); 
    mySubject.next('BBBBB');

    mySubject.subscribe(val=>console.log('Subscriber-2 ', val)); 

    mySubject.next('CCCCC');

  }
}
