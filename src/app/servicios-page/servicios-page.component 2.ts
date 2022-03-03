import { Component, OnInit } from '@angular/core';
import { GeneralValuesServices } from '../services/general_values.services';

@Component({
  selector: 'app-servicios-page',
  templateUrl: './servicios-page.component.html',
  styleUrls: ['./servicios-page.component.css']
})
export class ServiciosPageComponent implements OnInit {

  labels: String[] = [];
  idiom: String;
  
  constructor(
    private _generalValuesServices: GeneralValuesServices
  ) { 
    
   this._generalValuesServices.language$.subscribe( res => {
      this.idiom = res;  
      console.log(this);
      this.getLanguage(this.idiom);
    })
    
  }

  ngOnInit(): void {
    this.getLanguage(this._generalValuesServices.getIdiom());
    this.idiom = this._generalValuesServices.getIdiom();
  }
  getLanguage(lenguaje){
    this.labels = this._generalValuesServices.getLabels("servicios",lenguaje);   
  }

}
