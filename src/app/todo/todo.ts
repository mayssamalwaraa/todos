import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Todos } from '../services/todos';
import { todo } from '../models/todo.type';
import { HighlightCompletedTodo } from '../directives/highlight-completed-todo';
import { TitleCasePipe } from '@angular/common';
import { FilterTodoPipe } from '../pipes/filter-todo-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [HighlightCompletedTodo,TitleCasePipe,FilterTodoPipe,FormsModule],
  selector: 'app-todo',
  styleUrl: './todo.css',
  templateUrl: './todo.html',
})
export class Todo implements OnInit {
  todoService = inject(Todos)
    todos = signal<todo[]>([])
    searchBy = signal<string>('')

  ngOnInit(): void {
    this.todoService.findAllTodos().subscribe((todo)=>{
      this.todos.set(todo)
      console.log("todo",todo)
    })
  }
  handleUpdatetodo(todo: todo) {
    this.todos.update((prevStat)=>{
      return prevStat.map((current)=>{
        if(current.id === todo.id){
          return {...current, completed: !current.completed}
        }
        return current;
      });
    });
  }

}
