import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GeneralValuesServices } from '../services/general_values.services';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit,OnChanges {

  labels: String[] = [];
  idiom: String;

  number1: number = 0;
  number2: number = 0;
  hand1: String = "";
  hand2: String = "";
  max = 4;
  min = 1;
  showResult = false;
  loader = false;
  showEmojis = true;
  result: String = "";
  twoPlayer = false;
  player2: String = "IA"
  btn1Active = false; 
  btn2Active = true; 

  constructor(
    private _generalValuesServices: GeneralValuesServices
  ) { 
    this._generalValuesServices.language$.subscribe( res => {
      this.idiom = res;
      console.log(this.idiom);
      this.getLanguage(this.idiom);
    })
  }

  ngOnInit(): void {
    this.getLanguage(this._generalValuesServices.getIdiom());   
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    this.getLanguage(this.idiom);
    
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
    let hand: String = "";
    switch (player) {
      case 1:
        hand = this.labels[10];
        break;
      case 2:
        hand = this.labels[11];
        break;
      case 3:
        hand = this.labels[12];
        break;
      default:
        hand = "?"
        break;
    }
    return hand;
  }

  eval(){
    if (this.hand1 === this.hand2) {
      this.result = this.labels[13];
    } else {
      if ((this.hand1 == this.labels[10] && this.hand2 == this.labels[12] ) ||
          (this.hand1 == this.labels[11] && this.hand2 == this.labels[10] ) || 
          (this.hand1 == this.labels[12] && this.hand2 == this.labels[11] )){
        this.result = this.twoPlayer ? this.labels[14] : this.labels[15];
      }
      if ((this.hand1 == this.labels[10] && this.hand2 == this.labels[11]) || 
          (this.hand1 == this.labels[11] && this.hand2 == this.labels[12] ) ||
          (this.hand1 == this.labels[12] && this.hand2 == this.labels[10] )) {
            this.result = this.twoPlayer ? this.labels[16] : this.labels[17];
      }
    }
  }
  twoPlayerOrCPU(){
  
    this.twoPlayer = !this.twoPlayer;
   
    this.player2 = this.twoPlayer ? this.labels[8] : this.labels[9];   
    this.btn1Active = this.twoPlayer ? false : true;
    this.btn2Active = this.twoPlayer ? true : false;
    this.hand1 = "";
    this.hand2 = "";
    this.result = "";
   
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

    this.btn2Active = true;
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
  getLanguage(lenguaje){
    
    this.labels = this._generalValuesServices.getLabels("p-p-t",lenguaje);   
    this.hand1 = this.showHand(this.number1);
    this.hand2 = this.showHand(this.number2);
    this.eval();
    
  }
}
