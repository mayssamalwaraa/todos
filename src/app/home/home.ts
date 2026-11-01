import { Component, signal } from '@angular/core';
import { Title } from '../components/title/title';
import { Tracker } from '../components/tracker/tracker';

@Component({
  imports: [Title,Tracker],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  protected readonly title = signal('Angular-Demo');

  keyUpHandler(event : KeyboardEvent){
    console.log(`key ${event.key} is pressed !!!`)
  }
}
