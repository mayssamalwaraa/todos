import { Component,  } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Todos } from './services/todos';

@Component({
  imports: [RouterOutlet,RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  providers:[Todos]
})
export class App {
  
}
