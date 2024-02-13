import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Receta } from '../receta.model';
import { RecetaService } from '../receta.service';

@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.component.html',
  styleUrl: './receta-detalle.component.css',
})
export class RecetaDetalleComponent implements OnInit {
  receta: Receta;
  id: number;

  constructor(
    private recetaService: RecetaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.receta = this.recetaService.getReceta(this.id);
    });
  }

  onAddToShoppingList() {
    this.recetaService.agregarIngredientesListaCompras(
      this.receta.ingredientes
    );
  }

  onEditarReceta() {
    this.router.navigate(['editar'], { relativeTo: this.route });
  }

  onEliminarReceta() {
    this.recetaService.eliminarReceta(this.id);
    this.router.navigate(['/recetas']);
  }
}
