import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  number1: number = 0;
  number2: number = 0;
  hand1: string = "";
  hand2: string = "";
  max = 4;
  min = 1;
  showResult = false;
  loader = false;
  showEmojis = true;
  result: string = "";
  twoPlayer = false;
  player2: string = "IA"
  btn1Active = false; 
  btn2Active = true; 

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  play(){
    this.showResult = false;
    this.showEmojis = false;
    this.loader = true;
    
    setTimeout(() => {
      this.number1 = Math.floor(Math.random() * (this.max - this.min)) + this.min;
      this.number2 = Math.floor(Math.random() * (this.max - this.min)) + this.min;
      this.hand1 = this.showHand(this.number1);
      this.hand2 = this.showHand(this.number2);
      this.eval();
      this.loader = false;
      this.showEmojis = true;
      this.showResult = true;

    }, 1500);
  }

  showHand(player: number){
    let hand = "";
    switch (player) {
      case 1:
        hand = "Piedra";
        break;
      case 2:
        hand = "Papel";
        break;
      case 3:
        hand = "Tijera";
        break;
      default:
        hand = "?"
        break;
    }
    return hand;
  }

  eval(){
    if (this.hand1 === this.hand2) {
      this.result = "Empate, intenta de nuevo."
    } else {
      if ((this.hand1 == "Piedra" && this.hand2 == "Tijera" ) ||
          (this.hand1 == "Papel" && this.hand2 == "Piedra" ) || 
          (this.hand1 == "Tijera" && this.hand2 == "Papel" )){
        this.result = this.twoPlayer ? "Jugador 1 gana!" : "Tu ganas!";
      }
      if ((this.hand1 == "Piedra" && this.hand2 == "Papel") || 
          (this.hand1 == "Papel" && this.hand2 == "Tijera" ) ||
          (this.hand1 == "Tijera" && this.hand2 == "Piedra" )) {
            this.result = this.twoPlayer ? "Jugador 2 gana!" : "Perdiste";
      }
    }
  }
  twoPlayerOrCPU(){
  
    this.twoPlayer = !this.twoPlayer;
    this.player2 = this.twoPlayer ? "P2" : "IA";
    this.btn1Active = this.twoPlayer ? false : true;
    this.btn2Active = this.twoPlayer ? true : false;
    this.hand1 = "";
    this.hand2 = "";
   
  }

  player1Throw(){

    this.showResult = false;
    this.showEmojis = false;
    this.loader = true;
    this.btn1Active = true;
    setTimeout(() => {
      
      this.number1 = Math.floor(Math.random() * (this.max - this.min)) + this.min;
      this.hand1 = this.showHand(this.number1);
      // this.eval();
      this.result = "";
      this.hand2 = "";
      this.loader = false;
      this.showEmojis = true;
      this.showResult = true;
      this.btn2Active = false;
    }, 1500);
  }

  player2Throw(){

    this.showResult = false;
    this.showEmojis = false;
    this.loader = true;
    
    setTimeout(() => {
      
      this.number2 = Math.floor(Math.random() * (this.max - this.min)) + this.min;
      this.hand2 = this.showHand(this.number2);
      this.eval();
      this.loader = false;
      this.showEmojis = true;
      this.showResult = true;
      this.btn2Active = true;
      this.btn1Active = false;
    }, 1500);
  }
}
