import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ij-inova';
  dado1 = 0;
  dado2 = 0;
  max = 7;
  min = 1;
  constructor(){
    this.dado1 = Math.floor(Math.random() * (this.max - this.min)) + this.min;
    this.dado2 = Math.floor(Math.random() * (this.max - this.min)) + this.min;
  }

  ngOnInit(){
    // console.log(environment);
    
  }
  throwDice(){
    this.dado1 = Math.floor(Math.random() * (this.max - this.min)) + this.min;
    this.dado2 = Math.floor(Math.random() * (this.max - this.min)) + this.min;
  }
  
  
}
