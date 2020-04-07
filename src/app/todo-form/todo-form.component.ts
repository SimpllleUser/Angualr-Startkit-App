import { TodoService } from './../shared/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  title: string = '';
// 44:05 url https://www.youtube.com/watch?v=YN8zNnV0sK8
  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  }
  addTodo(){
    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      complete: false,
      date: new Date()
    };
    this.todoService.addTodo(todo);
    this.title = '';
  }

}
