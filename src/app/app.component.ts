import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_vacaciones';
  titleOptions = {
    opcion1: 'Declarativo',
    opcion2: 'Basado en componentes',
    opcion3: 'Aprende una vez'
  }

  opciones = {
    opcion1: 1,
    opcion2: 2,
    opcion3: 3,
    nopcion: 0,
    inicial: 0
  }

  show = this.opciones.inicial;

  change(e:number) {
    this.show = e;
  }

  cerrar(e: string){
    this.show = this.opciones.inicial;
  }

}
