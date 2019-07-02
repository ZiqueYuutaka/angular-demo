import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../list-todos/list-todos.component';
import { API_URL } from '../../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllTodos(param) {
    console.log("===>>>Calling api backend from WelcomeDataService");
    return this.httpClient.get<Todo[]>(`${API_URL}/api/users/${param}/todos`);
  }

  deleteTodo(username, id) {
    return this.httpClient.delete(`${API_URL}/api/users/${username}/todos/${id}`);
  }

  getTodo(username, id) {
    return this.httpClient.get<Todo>(`${API_URL}/api/users/${username}/todos/${id}`);
  }

  putTodo(username, id, todo) {
    return this.httpClient.put(`${API_URL}/api/users/${username}/todos/${id}`, todo);
  }

  postTodo(username, todo) {
    return this.httpClient.post(`${ API_URL }/api/users/${username}/todos`, todo);
  }
}
