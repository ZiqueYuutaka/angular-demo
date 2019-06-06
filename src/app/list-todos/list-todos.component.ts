import { Component, OnInit } from '@angular/core';
import {TodoDataService} from './../service/data/todo-data.service';


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

//  todos = [
//    new Todo(1, 'todo 1', 'complete', new Date()),
//    new Todo(2, 'todo 2', 'pending', new Date()),
//    new Todo(3, 'todo 3', 'not started', new Date()),
//  ];
    deleteMessage:string;
    todos:Todo[]
  constructor(
        private todoService: TodoDataService
    ) { }

  ngOnInit() {
      this.retrieveTodos();
  }
    
    retrieveTodos(){
        this.todoService.getAllTodos('username').subscribe(
        response => this.convertResponse(response)
      );
    }
    
    convertResponse(response){
        console.log(response);
        this.todos = response;
    }
    
    deleteTodo(id){
        console.log("deleting a todo " + id);
        this.todoService.deleteTodo('username', id).subscribe(
            response=>{
                console.log(response);
                this.deleteMessage='Deleted successfully';
                this.retrieveTodos();
            }
        );
        
    }
}

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public status: string,
    public targetDate: Date
  ) { }
}
