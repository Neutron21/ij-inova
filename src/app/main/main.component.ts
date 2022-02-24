import { Component, OnInit } from '@angular/core';
import { GeneralValuesServices } from '../services/general_values.services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

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
    this.labels = this._generalValuesServices.getLabels("main",lenguaje);   
  }
}
