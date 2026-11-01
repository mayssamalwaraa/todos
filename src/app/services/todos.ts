import { inject, Service, signal } from '@angular/core';
import { todo } from '../models/todo.type';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Service()
export class Todos {
    http = inject(HttpClient)

    findAllTodos() {
        const URL = 'https://jsonplaceholder.typicode.com/todos';
        return this.http.get<todo[]>(URL).pipe(
            catchError((error) => {
                console.error('Error fetching todos:', error);
                throw error;
            })
        );
    }
}
