import { Component, OnInit } from '@angular/core';
import { Receta } from '../receta.model';
import { RecetaService } from '../receta.service';

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrl: './lista-recetas.component.css',
})
export class ListaRecetasComponent implements OnInit {
  recetas: Receta[];

  constructor(private recetaService: RecetaService) {}

  ngOnInit() {
    this.recetas = this.recetaService.getRecetas();
  }
}
