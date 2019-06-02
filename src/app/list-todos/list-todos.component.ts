import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'todo 1', 'complete', new Date()),
    new Todo(2, 'todo 2', 'pending', new Date()),
    new Todo(3, 'todo 3', 'not started', new Date()),
  ];
  constructor() { }

  ngOnInit() {
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
