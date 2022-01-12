import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {

  title = 'ij-inova';
  dado1: any = 0;
  dado2: any = 0;
  max = 7;
  min = 1;
  pathDado1 = '../../assets/dado1.png';
  pathDado2 = '../../assets/dado2.png';
  showGift = false;
  // diceMp3 = '../../assets/diceSound.mp3';

  constructor() { 
    this.dado1 = Math.floor(Math.random() * (this.max - this.min)) + this.min;
    this.dado2 = Math.floor(Math.random() * (this.max - this.min)) + this.min;
    this.pathDado1 = `../..assets/dado${this.dado1}`;
    this.pathDado2 = `../..assets/dado${this.dado2}`;
  }

  ngOnInit(): void {
  }

  throwDice(){
    this.showGift = true;
    this.reproducir();
    this.dado1 = '?';
    this.dado2 = '?';

    setTimeout(() => {
      this.dado1 = Math.floor(Math.random() * (this.max - this.min)) + this.min;
      this.dado2 = Math.floor(Math.random() * (this.max - this.min)) + this.min;
      this.showGift = false;
    }, 1500);
    
  }
  reproducir() {
    const diceMp3 = new Audio('../../assets/diceSound.mp3');
    diceMp3.play();
}
}
