import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})



export class GeneralValuesServices{
    miNombre: String = "Ivan";

    language$: EventEmitter<string> = new EventEmitter<string>();
    
    constructor(){  }
}