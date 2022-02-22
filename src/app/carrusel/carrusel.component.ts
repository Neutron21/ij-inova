import { Component, Input, OnInit } from '@angular/core';
import { GeneralValuesServices } from '../services/general_values.services';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  labels: String[] = [];

  constructor(
    private _generalValuesServices: GeneralValuesServices
  ) { 
    this._generalValuesServices.language$.subscribe( res => {
      let idiom = res;
      this.getLanguage(idiom);
    })
  }

  ngOnInit(): void {
    this.getLanguage(this._generalValuesServices.getIdiom())
    
  }

  getLanguage(lenguaje){
    this.labels = this._generalValuesServices.getLabels("carrusel",lenguaje);
  }
}
