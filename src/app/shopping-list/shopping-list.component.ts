import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingrediente } from '../shared/ingrediente.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredientes: Ingrediente[];
  private ingChangeSub: Subscription;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.ingredientes = this.slService.getIngredientes();
    this.ingChangeSub = this.slService.ingredientesCambiaron.subscribe(
      (ingredientes: Ingrediente[]) => {
        this.ingredientes = ingredientes;
      }
    );
  }

  ngOnDestroy() {
    this.ingChangeSub.unsubscribe();
  }

  onEditarItem(index: number) {
    this.slService.editando.next(index);
  }
}
