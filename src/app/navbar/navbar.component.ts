import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GeneralValuesServices } from '../services/general_values.services';
import es from '../../assets/language/language_es.json';
import en from '../../assets/language/language_en.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {

  @Input() idioma: String = "es";
  
  labels: String[] = [];

  constructor(
    private _generalValuesServices: GeneralValuesServices
  ) { }

  ngOnInit(): void {
    
    this.setLanguage();
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    this.setLanguage();
    
  }
  changeLanguage(idiom: string){
    console.log(idiom);
    this._generalValuesServices.language$.emit(idiom);
    console.log(this);
    
  }
  setLanguage(){
    this.labels = [];
    if (this.idioma == 'es') {
        es.navbar.forEach(element => {
        this.labels.push(element);
      });
    } else {
        en.navbar.forEach(element => {
        this.labels.push(element)
      });
    }
     
   }
}
