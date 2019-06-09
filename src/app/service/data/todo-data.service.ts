import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Todo} from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private httpClient: HttpClient
    ) { }
    
    getAllTodos(param) {
    console.log("===>>>Calling api backend from WelcomeDataService");
      return this.httpClient.get<Todo[]>(`http://localhost:8080/api/users/${param}/todos`);
  }
    
    deleteTodo(username, id){
        return this.httpClient.delete(`http://localhost:8080/api/users/${username}/todos/${id}`);
    }
    
    getTodo(username, id){
        return this.httpClient.get<Todo>(`http://localhost:8080/api/users/${username}/todos/${id}`);
    }

  putTodo(username, id, todo) {
    return this.httpClient.put(`http://localhost:8080/api/users/${username}/todos/${id}`, todo);
  }
}
