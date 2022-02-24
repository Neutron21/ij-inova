import { EventEmitter, Injectable } from "@angular/core";
import es from '../../assets/language/language_es.json';
import en from '../../assets/language/language_en.json';

@Injectable({
    providedIn: 'root'
})

export class GeneralValuesServices{

    language$: EventEmitter<string> = new EventEmitter<string>();
    idiom: String = "es";

    constructor(){  }

    setIdiom(language: String){
        this.idiom = language;
    }
    getIdiom(){
        return this.idiom;
    }
    getLabels(component: string, idioma: string){
        let labelsCmpt :String[] = [];
        
        if (idioma == 'es') {
            es[component].forEach((element: String) => {
                 labelsCmpt.push(element);
            });
        } else {
            en[component].forEach((element: String) => {
                labelsCmpt.push(element);
           });
        }
        return labelsCmpt;
    }
}