import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getAllTodos(username: string) {
    return this.http.get(`http://localhost:9090/users/${username}/todos`);
  }

  getTodoById(username: string, id: number) {
    return this.http.get(`http://localhost:9090/users/${username}/todos/${id}`);
  }

  updateTodo(username: string, id: number, todo: Todo) {
    return this.http.put(
      `http://localhost:9090/users/${username}/todos/${id}`,
      todo
    );
  }

  deleteTodo(username: string, id: number) {
    return this.http.delete(
      `http://localhost:9090/users/${username}/todos/${id}`
    );
  }
}
