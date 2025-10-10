import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subjectdemo',
  imports: [],
  templateUrl: './subjectdemo.html',
  styleUrl: './subjectdemo.css'
})
export class Subjectdemo {
  ngOnInit(){
    // this.lets_learn_subject();
    // this.let_learn_behaviour_subject();
    // this.let_learn_replay_subject();
    this.let_learn_async_subject();
  }
  lets_learn_subject(){
    let mySubject=new Subject();
    mySubject.next('AAAAA'); // AAAA is published
    mySubject.subscribe(val=>console.log('Subscriber-1 ', val)); 
    mySubject.next('BBBBB');

    mySubject.subscribe(val=>console.log('Subscriber-2 ', val)); 

    mySubject.next('CCCCC');

  }
  let_learn_behaviour_subject(){
    let mySubject=new BehaviorSubject('Default Value');
    mySubject.next('AAAAA'); // AAAA is published
    mySubject.subscribe(val=>console.log('Subscriber-1 ', val)); 
    mySubject.next('AAAAA');
    mySubject.next('BBBBB');

    mySubject.subscribe(val=>console.log('Subscriber-2 ', val)); 

    mySubject.next('CCCCC');
  }
  let_learn_replay_subject(){
    let mySubject=new ReplaySubject();
    mySubject.next('AAAAA'); // AAAA is published
    mySubject.subscribe(val=>console.log('Subscriber-1 ', val)); 
    // mySubject.next('AAAAA');
    mySubject.next('BBBBB');
    mySubject.subscribe(val=>console.log('Subscriber-2 ', val)); 
    mySubject.next('CCCCC');
  }
  let_learn_async_subject(){
    let mySubject=new AsyncSubject();
    mySubject.next('AAAAA'); // AAAA is published
    mySubject.subscribe(val=>console.log('Subscriber-1 ', val)); 
    // mySubject.next('AAAAA');
    mySubject.next('BBBBB');
    mySubject.subscribe(val=>console.log('Subscriber-2 ', val)); 
    mySubject.next('CCCCC');
    mySubject.complete();
  }
}
