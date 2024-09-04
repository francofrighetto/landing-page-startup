import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
// import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BtnSubirComponent } from './components/btn-subir/btn-subir.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { SliderClientesComponent } from './components/slider-clientes/slider-clientes.component';
import { VerMasComponent } from './components/ver-mas/ver-mas.component';

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
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
