import { Component, OnInit} from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public loading: boolean = true;

  constructor(public todosService: TodoService) { }

  ngOnInit(): void {
    this.todosService.fetchTodo()
    .pipe(delay(500))
    .subscribe(() => {
      this.loading = false;
    });
  }

  onChange(id: number){
    this.todosService.onToggle(id);
   }

   removeTodo(id: number){
    this.todosService.removeTodo(id);
   }
}
