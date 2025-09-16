import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Modelo/Persona';
import { PersonabdService } from 'src/app/personabd.service';
import { DatosJsonService } from 'src/app/services/datos-json.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private service: PersonabdService,
    private serviceJSON: DatosJsonService
  ) { }

  header: any;
  headerJSON: any;

  persona: Persona;

  ngOnInit(): void {
    this.service.getHeader().subscribe((data) => {
      this.header = data;
    });

    this.serviceJSON.obtenerDatos().subscribe((data) => {
      this.headerJSON = data.header;
      this.persona = data.persona;
    });
  }

  mostrarPerfil() {
    const login = document.getElementById('login');

    if (login != null) {
      login.style.display = 'inline';
    }
  }

  subirpx() {
    window.scrollTo(0, 100);
  }
}
