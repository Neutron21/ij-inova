import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GeneralValuesServices } from '../services/general_values.services';
import es from '../../assets/language/language_es.json';
import en from '../../assets/language/language_en.json';



@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit, OnChanges {

  @Input() idioma: String = "es";
  title: String = "";
  subtitle: String = "";
  
  constructor(
    private _generalValuesServices: GeneralValuesServices
  ) { }
  
  ngOnInit(): void {
    
    console.log('props', this);
    this.getLanguage();    
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    this.getLanguage();
    
  }
  getLanguage(){
   if (this.idioma == 'es') {
     this.title = es.component[0].title;
     this.subtitle = es.component[0].subtitle;
   } else {
    this.title = en.component[0].title;
    this.subtitle = en.component[0].subtitle;
   }
    
  }
 
}
