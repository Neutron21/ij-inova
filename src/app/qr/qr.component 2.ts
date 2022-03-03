import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GeneralValuesServices } from '../services/general_values.services';


@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit, OnChanges {

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
    this.getLanguage(this._generalValuesServices.getIdiom());    
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    this.getLanguage(this.idiom);
    
  }
  getLanguage(lenguaje){
    
    this.labels = this._generalValuesServices.getLabels("qr",lenguaje);   
  }
 
}
