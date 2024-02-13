import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingrediente } from '../../shared/ingrediente.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  modoEdicion = false;
  indexItemEditado: number;
  itemEditado: Ingrediente;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.slService.editando.subscribe((index: number) => {
      this.indexItemEditado = index;
      this.modoEdicion = true;
      this.itemEditado = this.slService.getIngrediente(index);
      this.slForm.setValue({
        nombre: this.itemEditado.nombre,
        cantidad: this.itemEditado.cantidad,
      });
    });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const nuevoIngrediente = new Ingrediente(value.nombre, value.cantidad);
    if (this.modoEdicion) {
      this.slService.actualizarIngrediente(
        this.indexItemEditado,
        nuevoIngrediente
      );
    } else {
      this.slService.addIngrediente(nuevoIngrediente);
    }
    this.modoEdicion = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.modoEdicion = false;
  }

  onDelete() {
    this.slService.eliminarIngrediente(this.indexItemEditado);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
