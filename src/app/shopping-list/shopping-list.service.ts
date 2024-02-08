import { EventEmitter } from '@angular/core';
import { Ingrediente } from '../shared/ingrediente.model';

export class ShoppingListService {
  ingredientesCambiaron = new EventEmitter<Ingrediente[]>();
  private ingredientes: Ingrediente[] = [
    new Ingrediente('Manzanas', 5),
    new Ingrediente('Tomates', 6),
    new Ingrediente('Queso', 1),
  ];

  getIngredientes() {
    return this.ingredientes.slice();
  }

  addIngrediente(ingrediente: Ingrediente) {
    this.ingredientes.push(ingrediente);
    this.ingredientesCambiaron.emit(this.ingredientes.slice());
  }

  addIngredientes(ingredientes: Ingrediente[]) {
    this.ingredientes.push(...ingredientes);
    this.ingredientesCambiaron.emit(this.ingredientes.slice());
  }
}
