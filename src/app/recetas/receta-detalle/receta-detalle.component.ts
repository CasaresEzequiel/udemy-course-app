import { Component, Input, OnInit } from '@angular/core';
import { Receta } from '../receta.model';
import { RecetaService } from '../receta.service';

@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.component.html',
  styleUrl: './receta-detalle.component.css',
})
export class RecetaDetalleComponent implements OnInit {
  @Input() receta: Receta;

  constructor(private recetaService: RecetaService) {}

  ngOnInit() {}

  onAddToShoppingList() {
    this.recetaService.agregarIngredientesListaCompras(
      this.receta.ingredientes
    );
  }
}
