import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// coleccion de eventos que se ejecutan de forma asincrona
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatosJsonService {
  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get('assets/data/data.json');
  }

  obtenerDatosPorClave(key: string): Observable<any> {
    return new Observable(observer => {
      this.obtenerDatos().subscribe(data => {
        const resultado = data[key] || null;
        observer.next(resultado);
        observer.complete();
      });
    });
  }
}
