import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tracker',
  styleUrl: './tracker.css',
  templateUrl: './tracker.html',
})
export class Tracker {
  steps = signal(0)
  increment(){
    this.steps.update((prevStep)=>prevStep+1)
    console.log("increment....")
  }
  decrement(){
    if(this.steps() >=0){
    this.steps.update((prevStep)=>prevStep-1)

    }
    console.log("Decrement....")
  }
  reset(){
    this.steps.set(0)
  }

}
