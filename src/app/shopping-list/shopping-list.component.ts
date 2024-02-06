import { Component, OnInit } from '@angular/core';
import { Ingrediente } from '../shared/ingrediente.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit {
  ingredientes: Ingrediente[] = [
    new Ingrediente('Manzanas', 5),
    new Ingrediente('Tomates', 6),
    new Ingrediente('Queso', 1),
  ];
  constructor() {}
  ngOnInit() {}

  onIngredienteAgregado(ingrediente: Ingrediente) {
    this.ingredientes.push(ingrediente);
  }
}
