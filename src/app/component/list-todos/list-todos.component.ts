import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.getAllTodos('demo').subscribe({
      next: (response: any) => {
        this.todos = response;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo('demo', id).subscribe({
      next: (response: any) => {
        this.refreshTodos();
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  updateTodo(id: number) {
    this.router.navigate(['todos', id]);
  }

  addTodo(){
    this.router.navigate(['todos', 0]);
  }
}
