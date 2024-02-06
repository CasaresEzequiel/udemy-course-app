import { Component, Input, OnInit } from '@angular/core';
import { Receta } from '../receta.model';

@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.component.html',
  styleUrl: './receta-detalle.component.css',
})
export class RecetaDetalleComponent implements OnInit {
  @Input() receta: Receta;

  constructor() {}

  ngOnInit() {}
}
