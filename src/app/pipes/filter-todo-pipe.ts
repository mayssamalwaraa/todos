import { Pipe, PipeTransform } from '@angular/core';
import { todo } from '../models/todo.type';

@Pipe({
  name: 'filterTodo',
})
export class FilterTodoPipe implements PipeTransform {
  transform(value: todo[], searchBy: string): todo[] {
    console.log('value', value);
    console.log('searchBy', searchBy);
    if (!searchBy) {
      return value;
    }
    return value.filter((todo) => todo.title.toLowerCase().includes(searchBy.toLowerCase()));
  }
}
