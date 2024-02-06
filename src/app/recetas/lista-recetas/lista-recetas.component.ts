import { Component, OnInit } from '@angular/core';
import { Receta } from '../receta.model';

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrl: './lista-recetas.component.css',
})
export class ListaRecetasComponent implements OnInit {
  recetas: Receta[] = [
    new Receta(
      'Receta prueba',
      'Una descripcion',
      'https://img-global.cpcdn.com/recipes/f1cfa489eb1dbcfe/1200x630cq70/photo.jpg'
    ),
    new Receta(
      'Receta prueba 2',
      'Otra descripcion',
      'https://img-global.cpcdn.com/recipes/f1cfa489eb1dbcfe/1200x630cq70/photo.jpg'
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
