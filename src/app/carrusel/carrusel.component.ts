import { Component, Input, OnInit } from '@angular/core';
import { GeneralValuesServices } from '../services/general_values.services';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  labels: String[] = [];
  idiom: String = "es";

  constructor(
    private _generalValuesServices: GeneralValuesServices
  ) { 
    this._generalValuesServices.language$.subscribe( res => {
      this.idiom = res;
      console.log(this.idiom);
      this.getLanguage(this.idiom)
    })
  }

  ngOnInit(): void {
    this.getLanguage(this.idiom)
    
  }

  getLanguage(lenguaje){
    
    this.labels = this._generalValuesServices.getLabels("carrusel",lenguaje);
  }
}
