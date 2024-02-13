import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Receta } from '../receta.model';
import { RecetaService } from '../receta.service';

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrl: './lista-recetas.component.css',
})
export class ListaRecetasComponent implements OnInit, OnDestroy {
  recetas: Receta[];
  subscripcion: Subscription;

  constructor(
    private recetaService: RecetaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscripcion = this.recetaService.recetasCambiaron.subscribe(
      (recetas: Receta[]) => {
        this.recetas = recetas;
      }
    );
    this.recetas = this.recetaService.getRecetas();
  }

  onNuevaReceta() {
    this.router.navigate(['nueva'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscripcion.unsubscribe();
  }
}
