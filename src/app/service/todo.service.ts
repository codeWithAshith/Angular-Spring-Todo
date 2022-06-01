import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getAllTodos(username: string) {
    return this.http.get(`http://localhost:9090/users/${username}/todos`);
  }

  deleteTodo(username: string, id: number) {
    return this.http.delete(
      `http://localhost:9090/users/${username}/todos/${id}`
    );
  }
}
