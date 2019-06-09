import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from './../service/data/todo-data.service';
import { Todo } from './../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoId = '';
  todo: Todo;

  constructor(
    private aRouter: ActivatedRoute,
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.todoId = this.aRouter.snapshot.params['id'];
    this.todo = new Todo(0, null, 'not started', new Date()); //suppresses error from asynchronous call in subscribe
    if (this.todoId != '0') {
      this.todoService.getTodo('username', this.todoId).subscribe(
        response => this.convertResponse(response)
      );
    }
  }

  convertResponse(response) {
    console.log(response);
    this.todo = response;
  }

  saveTodo() {
    console.log('saving following todo: ');
    console.log(this.todo);
    if (this.todoId != '0') {
      console.log('===>>>updating a todo');
      this.todoService.putTodo('username', this.todoId, this.todo).subscribe(
        data => console.log(data)
      )
    } else {
      console.log('creating a todo');
      this.todoService.postTodo('username', this.todo).subscribe(
        data => console.log(data)
      )
    }

    //navigate to todos page afterwards.
    this.router.navigate(['todos']);
  }

}
