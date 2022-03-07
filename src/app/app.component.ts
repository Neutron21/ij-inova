import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { GeneralValuesServices } from './services/general_values.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ij-inova';
  idioma = "es"
  loader = false;
  
  constructor(
    private _generalValuesServices: GeneralValuesServices
  ){ 
    
    this._generalValuesServices.language$.subscribe(res => {
      this.loader = true;
      this.idioma = res;
      setTimeout(() => {
        this.loader = false;
      }, 1500);
      
    })
  }

  ngOnInit(){
    this.loader = true;
    setTimeout(() => {
      this.loader = false;
    }, 1500);
  }  
  
}
