import { Component, OnInit } from '@angular/core';
import { GeneralValuesServices } from '../services/general_values.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _generalValuesServices: GeneralValuesServices
  ) { }

  ngOnInit(): void {
  }

  changeLanguage(idiom: string){
    console.log(idiom);
    this._generalValuesServices.language$.emit(idiom);
  }
}
