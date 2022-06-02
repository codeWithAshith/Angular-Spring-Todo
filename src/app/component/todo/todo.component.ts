import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    username: '',
    description: '',
    targetDate: new Date().toString(),
    done: false,
  };

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todoService.getTodoById('demo', this.id).subscribe({
      next: (response: any) => {
        this.todo = response;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  saveTodo() {}
}
