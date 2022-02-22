import { Component, OnInit } from '@angular/core';
import { GeneralValuesServices } from '../services/general_values.services';

@Component({
  selector: 'app-nosotros-page',
  templateUrl: './nosotros-page.component.html',
  styleUrls: ['./nosotros-page.component.css']
})
export class NosotrosPageComponent implements OnInit {

  labels: String[] = [];
  idiom: String;
  
  constructor(
    private _generalValuesServices: GeneralValuesServices
  ) { 
    this._generalValuesServices.language$.subscribe( res => {
      this.idiom = res;
      this.getLanguage(this.idiom);
    })
  }

  ngOnInit(): void {
    this.getLanguage(this._generalValuesServices.getIdiom());
  }
  getLanguage(lenguaje){
    this.labels = this._generalValuesServices.getLabels("nosotros",lenguaje);   
  }
}
