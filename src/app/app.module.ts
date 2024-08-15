import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
// import { AppRoutingModule } from './app-routing.module';
import { BtnSubirComponent } from './components/btn-subir/btn-subir.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderClientesComponent } from './components/slider-clientes/slider-clientes.component';
import { VerMasComponent } from './components/ver-mas/ver-mas.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreMiComponent,
    ContactComponent,
    FooterComponent,
    BtnSubirComponent,
    CardProjectComponent,
    PresentacionComponent,
    ProyectoComponent,
    SliderClientesComponent,
    VerMasComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
