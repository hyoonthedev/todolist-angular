import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  // Declare here, put into .html with {{ title }}
  // title = "todos";

  // Let todos = array of Todo
  todos:Todo[];


  constructor() { }

  ngOnInit(): void {
    // 'this' is required to call todos
    // Object will be red until you match the required content
    this.todos = [
      {
        content: 'First Todo',
        completed: false
      },
      {
        content: 'Second Todo',
        completed: false
      }
    ]
  }
}
