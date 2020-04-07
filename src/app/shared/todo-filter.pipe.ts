import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from './todo.service';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform{
  transform(todo: Todo[], search: string = ''): Todo[]{
    if (!search){
      return todo;
    }

    return todo.filter(t => {
      return t.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1;
    });
  }
}
