import { Component, OnInit } from '@angular/core';
import { Receta } from './receta.model';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.css',
})
export class RecetasComponent implements OnInit {
  recetaElegida: Receta;

  constructor() {}

  ngOnInit() {}
}
