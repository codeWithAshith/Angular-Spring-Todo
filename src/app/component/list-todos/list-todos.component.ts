import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  todos: Todo[] = [
    {
      description: 'Learn to dance',
      targetDate: new Date().toString(),
      done: false,
    },
    {
      description: 'Learn to cook',
      targetDate: new Date().toString(),
      done: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
