import { Component, OnInit } from '@angular/core';
import { Receta } from './receta.model';
import { RecetaService } from './receta.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.css',
  providers: [RecetaService],
})
export class RecetasComponent implements OnInit {
  recetaElegida: Receta;

  constructor(private recetaService: RecetaService) {}

  ngOnInit() {
    this.recetaService.recetaElegida.subscribe((receta: Receta) => {
      this.recetaElegida = receta;
    });
  }
}
