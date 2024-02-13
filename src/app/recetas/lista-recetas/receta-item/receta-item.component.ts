import { Component, Input, OnInit } from '@angular/core';
import { Receta } from '../../receta.model';

@Component({
  selector: 'app-receta-item',
  templateUrl: './receta-item.component.html',
  styleUrl: './receta-item.component.css',
})
export class RecetaItemComponent implements OnInit {
  @Input() receta: Receta;
  @Input() index: number;

  ngOnInit() {}
}
