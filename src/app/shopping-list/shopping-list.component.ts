import { Component, OnInit } from '@angular/core';
import { Ingrediente } from '../shared/ingrediente.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit {
  ingredientes: Ingrediente[];
  constructor(private slService: ShoppingListService) {}
  ngOnInit() {
    this.ingredientes = this.slService.getIngredientes();
    this.slService.ingredientesCambiaron.subscribe(
      (ingredientes: Ingrediente[]) => {
        this.ingredientes = ingredientes;
      }
    );
  }
}
