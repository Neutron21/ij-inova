import { Component, OnInit } from '@angular/core';
import { GeneralValuesServices } from '../services/general_values.services';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  labels: String[] = [];
  idiom: String;

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
    this.getLanguage(this._generalValuesServices.getIdiom())
  }
  getLanguage(lenguaje){ 
    this.labels = this._generalValuesServices.getLabels("maps",lenguaje);   
  }
}
