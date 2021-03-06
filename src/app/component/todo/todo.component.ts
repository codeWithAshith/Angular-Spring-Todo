import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  id: number = 0;
  todo: Todo = {
    id: 0,
    username: 'demo',
    description: '',
    targetDate: new Date(),
    done: false,
  };

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id > 0)
      this.todoService.getTodoById('demo', this.id).subscribe({
        next: (response: any) => {
          this.todo = response;
        },
        error: (error: any) => {
          console.log(error);
        },
      });
  }
  saveTodo() {
    if (this.id > 0)
      this.todoService.updateTodo('demo', this.id, this.todo).subscribe({
        next: (response: any) => {
          this.todo = response;
          this.router.navigate(['todos']);
        },
        error: (error: any) => {
          console.log(error);
        },
      });
    else {
      this.todoService.createTodo('demo', this.id, this.todo).subscribe({
        next: (response: any) => {
          this.todo = response;
          this.router.navigate(['todos']);
        },
        error: (error: any) => {
          console.log(error);
        },
      });
    }
  }
}
