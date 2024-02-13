import { Injectable } from '@angular/core';

import { Receta } from './receta.model';
import { Ingrediente } from '../shared/ingrediente.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecetaService {
  recetasCambiaron = new Subject<Receta[]>();

  private recetas: Receta[] = [
    new Receta(
      'Bife con papas',
      'Bife de ternera a la criolla con papas.',
      'https://img-global.cpcdn.com/recipes/f1cfa489eb1dbcfe/1200x630cq70/photo.jpg',
      [
        new Ingrediente('Bife de ternera', 1),
        new Ingrediente('Papas', 3),
        new Ingrediente('Morrón', 1),
      ]
    ),
    new Receta(
      'Hamburguesa Completa',
      'Hamburguesa con queso, lechuga, tomate y cebolla',
      'https://es.rc-cdn.community.thermomix.com/recipeimage/s3x1gsfi-3d839-205138-cfcd2-3qsm0j1y/148f620b-8050-4bd2-9dd6-aca7af1154e2/main/hamburguesa-de-ternera.jpg',
      [
        new Ingrediente('Hamburguesa de carne', 1),
        new Ingrediente('Queso', 3),
        new Ingrediente('Lechuga', 1),
        new Ingrediente('Tomate', 1),
        new Ingrediente('Cebolla', 1),
      ]
    ),
    new Receta(
      'Empanadas',
      'Empanadas de carne, fritas',
      'https://www.lanacion.com.ar/resizer/v2/empanadas-de-7IXBPJ5JHBDCBHSUDK3CFZ5XHU.jpg?auth=9455e6ab67367ad88ef7cc1b4e5246742b66a926f59d0a7dabaf15bc22919c10&width=420&height=280&quality=70&smart=true',
      [new Ingrediente('Tapas', 1), new Ingrediente('Carne', 3)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}
  getRecetas() {
    return this.recetas.slice();
  }

  getReceta(index: number) {
    return this.recetas[index];
  }

  agregarIngredientesListaCompras(ingredientes: Ingrediente[]) {
    this.slService.addIngredientes(ingredientes);
  }

  agregarReceta(receta: Receta) {
    this.recetas.push(receta);
    this.recetasCambiaron.next(this.recetas.slice());
  }

  actualizarReceta(index: number, nuevaReceta: Receta) {
    this.recetas[index] = nuevaReceta;
    this.recetasCambiaron.next(this.recetas.slice());
  }

  eliminarReceta(index: number) {
    this.recetas.splice(index, 1);
    this.recetasCambiaron.next(this.recetas.slice());
  }
}
