import { Subject } from 'rxjs';

import { Ingrediente } from '../shared/ingrediente.model';

export class ShoppingListService {
  ingredientesCambiaron = new Subject<Ingrediente[]>();
  editando = new Subject<number>();
  private ingredientes: Ingrediente[] = [
    new Ingrediente('Manzanas', 5),
    new Ingrediente('Tomates', 6),
    new Ingrediente('Queso', 1),
  ];

  getIngredientes() {
    return this.ingredientes.slice();
  }

  getIngrediente(index: number) {
    return this.ingredientes[index];
  }

  addIngrediente(ingrediente: Ingrediente) {
    this.ingredientes.push(ingrediente);
    this.ingredientesCambiaron.next(this.ingredientes.slice());
  }

  addIngredientes(ingredientes: Ingrediente[]) {
    this.ingredientes.push(...ingredientes);
    this.ingredientesCambiaron.next(this.ingredientes.slice());
  }

  actualizarIngrediente(index: number, ingredienteActualizado: Ingrediente) {
    this.ingredientes[index] = ingredienteActualizado;
    this.ingredientesCambiaron.next(this.ingredientes.slice());
  }

  eliminarIngrediente(index: number) {
    this.ingredientes.splice(index, 1);
    this.ingredientesCambiaron.next(this.ingredientes.slice());
  }
}
