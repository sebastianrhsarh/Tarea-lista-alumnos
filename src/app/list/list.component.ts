import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  listaAlumnos = [
    {
      Nombre: 'Juan',
      Aprobado: true 
    },
    {
      Nombre: 'Pedro',
      Aprobado: true 
    },
    {
      Nombre: 'Patricio',
      Aprobado: true 
    },
    {
      Nombre: 'José',
      Aprobado: false 
    },
    {
      Nombre: 'Alberto',
      Aprobado: true 
    },
    {
      Nombre: 'Felipe',
      Aprobado: false 
    },
  ]

}
