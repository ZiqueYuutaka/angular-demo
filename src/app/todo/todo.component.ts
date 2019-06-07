import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TodoDataService} from './../service/data/todo-data.service';
import {Todo} from './../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

    todoId='';
    todo:Todo;
    
  constructor(
    private aRouter: ActivatedRoute,
     private todoService:TodoDataService
    ) { }

  ngOnInit() {
      this.todoId = this.aRouter.snapshot.params['id'];
      this.todo = new Todo(0,'','',new Date()); //suppresses error from asynchronous call in subscribe
      this.todoService.getTodo('username', this.todoId).subscribe(
        response => this.convertResponse(response)
      );
  }
    
    convertResponse(response){
        console.log(response);
        this.todo=response;
    }

}
