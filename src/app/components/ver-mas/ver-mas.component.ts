import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosJsonService } from 'src/app/services/datos-json.service';

@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.component.html',
  styleUrls: ['./ver-mas.component.css']
})
export class VerMasComponent implements OnInit {
  proyectoParam: string = '';

  proyecto: any;

  constructor(private route: ActivatedRoute,
    private datosJsonService: DatosJsonService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.proyectoParam = params.get('proyecto')!;
    });
    this.getDatos();
  }

  getDatos() {
    this.datosJsonService.obtenerDatos().subscribe((data) => {
      this.proyecto = data[this.proyectoParam];
    });
  }

}
