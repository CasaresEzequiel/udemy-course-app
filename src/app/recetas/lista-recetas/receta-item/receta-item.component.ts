import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Receta } from '../../receta.model';

@Component({
  selector: 'app-receta-item',
  templateUrl: './receta-item.component.html',
  styleUrl: './receta-item.component.css',
})
export class RecetaItemComponent implements OnInit {
  @Input() receta: Receta;

  @Output() recetaElegida = new EventEmitter<void>();

  constructor() {}
  ngOnInit() {}

  onSelected() {
    this.recetaElegida.emit();
  }
}
