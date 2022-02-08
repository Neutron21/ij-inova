import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SwitchComponent } from './switch/switch.component';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { MapsComponent } from './maps/maps.component';
import { YouTubeComponent } from './you-tube/you-tube.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { CountdownComponent } from './countdown/countdown.component';
import { DiceComponent } from './dice/dice.component';
import { QrComponent } from './qr/qr.component';
import { ServiciosPageComponent } from './servicios-page/servicios-page.component';
import { NosotrosPageComponent } from './nosotros-page/nosotros-page.component';
import { EjemplosPageComponent } from './ejemplos-page/ejemplos-page.component';
import { MainComponent } from './main/main.component';
import { WpButtomComponent } from './wp-buttom/wp-buttom.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SwitchComponent,
    PiedraPapelTijeraComponent,
    MapsComponent,
    YouTubeComponent,
    CarruselComponent,
    CountdownComponent,
    DiceComponent,
    QrComponent,
    ServiciosPageComponent,
    NosotrosPageComponent,
    EjemplosPageComponent,
    MainComponent,
    WpButtomComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
