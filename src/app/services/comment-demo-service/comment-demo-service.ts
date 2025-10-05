import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import{ CommentInterface } from '../../models/comment-interface'

@Component({
  selector: 'app-comment-demo-service',
  imports: [],
  templateUrl: './comment-demo-service.html',
  styleUrl: './comment-demo-service.css'
})
export class CommentDemoService {
    comment_url ="https://jsonplaceholder.typicode.com/comments"
    constructor(private httpClient:HttpClient){

    }
    getAllComments(): Observable<CommentInterface[]> {
      return this.httpClient.get<CommentInterface[]>(this.comment_url)
    }
}
