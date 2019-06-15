import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './../service/data/todo-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  deleteMessage: string;
  todos: Todo[]
  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.retrieveTodos();
  }

  retrieveTodos() {
    this.todoService.getAllTodos('username').subscribe(
      response => this.convertResponse(response)
    );
  }

  convertResponse(response) {
    console.log(response);
    this.todos = response;
  }

  deleteTodo(id) {
    console.log("deleting a todo " + id);
    this.todoService.deleteTodo('username', id).subscribe(
      response => {
        console.log(response);
        this.deleteMessage = 'Deleted successfully';
        this.retrieveTodos();
      }
    );

  }

  updateTodo(id) {
    console.log("updating a todo " + id);
    this.router.navigate(['todos', id]);

  }

  addTodo(id) {
    console.log("adding a todo " + id);
    this.router.navigate(['todos', 0]);

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
