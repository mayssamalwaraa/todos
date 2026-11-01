import { Component, input, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-title',
  styleUrl: './title.css',
  templateUrl: './title.html',
})
export class Title {
  title = input.required()
}
