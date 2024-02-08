import { Component, Input, OnInit } from '@angular/core';
import { Receta } from '../../receta.model';
import { RecetaService } from '../../receta.service';

@Component({
  selector: 'app-receta-item',
  templateUrl: './receta-item.component.html',
  styleUrl: './receta-item.component.css',
})
export class RecetaItemComponent implements OnInit {
  @Input() receta: Receta;

  constructor(private recetaService: RecetaService) {}
  ngOnInit() {}

  onSelected() {
    this.recetaService.recetaElegida.emit(this.receta);
  }
}
