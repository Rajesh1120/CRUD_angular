import { Component } from '@angular/core';
import { CommentDemoService } from '../../services/comment-demo-service/comment-demo-service';
import { CommentInterface } from '../../models/comment-interface';

@Component({
  selector: 'app-comment-demo',
  imports: [],
  templateUrl: './comment-demo.html',
  styleUrl: './comment-demo.css'
})
export class CommentDemo {
    z:CommentInterface[]=[];
    constructor(private commentService: CommentDemoService){}
    ngOnInit(){
      this.commentService.getAllComments();
    }
}
