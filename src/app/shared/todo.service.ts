import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';

export interface Todo {
  id: number;
  title: string;
  complete: boolean;
  date?: any;
}

@Injectable({providedIn: 'root'})

export class TodoService {
  public todo: Todo[] = [];
  constructor(public http: HttpClient){}

  fetchTodo(): Observable<Todo[]>{
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .pipe(tap(todo => this.todo = todo))
  }

  onToggle(id: number) {
    console.log(id);
    const idx = this.todo.findIndex(t => t.id === id);
    this.todo[idx].complete = !this.todo[idx].complete;
  }

  removeTodo(id: number) {
    this.todo = this.todo.filter(t => t.id !== id);
  }

  addTodo(todos: Todo){
    this.todo.push(todos);
  }
}
