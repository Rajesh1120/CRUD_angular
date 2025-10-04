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



