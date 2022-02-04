import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wp-buttom',
  templateUrl: './wp-buttom.component.html',
  styleUrls: ['./wp-buttom.component.css']
})
export class WpButtomComponent implements OnInit {

  url = "https://api.whatsapp.com/send?phone=525586779112&text=Hola%20Ivan,%20tuve%20tu%20contacto%20por%20tu%20firma%20de%20correo,%20me%20gustar%C3%ADa%20platicar%20contigo"

  constructor() { }

  ngOnInit(): void {
  }

}
