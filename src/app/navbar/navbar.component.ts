import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GeneralValuesServices } from '../services/general_values.services';
import * as $ from 'jquery';
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
    this.setLanguage();
  }
  changeLanguage(idiom: string){
    this._generalValuesServices.language$.emit(idiom);
    this.hideMenu();
  }
  setLanguage(){
    this.labels = [];
    this._generalValuesServices.setIdiom(this.idioma);
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
   hideMenu() {
    $("#navbarNavDropdown").removeClass("show")
  }
}
