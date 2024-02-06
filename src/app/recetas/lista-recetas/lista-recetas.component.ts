import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Receta } from '../receta.model';

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrl: './lista-recetas.component.css',
})
export class ListaRecetasComponent implements OnInit {
  @Output() recetaFueElegida = new EventEmitter<Receta>();
  recetas: Receta[] = [
    new Receta(
      'Bife con papas',
      'Bife de ternera a la criolla con papas.',
      'https://img-global.cpcdn.com/recipes/f1cfa489eb1dbcfe/1200x630cq70/photo.jpg'
    ),
    new Receta(
      'Hamburguesa Completa',
      'Hamburguesa con queso, lechuga, tomate y cebolla',
      'https://es.rc-cdn.community.thermomix.com/recipeimage/s3x1gsfi-3d839-205138-cfcd2-3qsm0j1y/148f620b-8050-4bd2-9dd6-aca7af1154e2/main/hamburguesa-de-ternera.jpg'
    ),
  ];

  constructor() {}

  ngOnInit() {}

  onRecetaElegida(receta: Receta) {
    this.recetaFueElegida.emit(receta);
  }
}
