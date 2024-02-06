import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingrediente } from '../../shared/ingrediente.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nombreInput', { static: true }) nombreInputRef: ElementRef;
  @ViewChild('cantidadInput', { static: true }) cantidadInputRef: ElementRef;
  @Output() ingredienteAgregado = new EventEmitter<Ingrediente>();

  constructor() {}

  ngOnInit() {}

  onAgregarItem() {
    const ingNombre = this.nombreInputRef.nativeElement.value;
    const ingCantidad = this.cantidadInputRef.nativeElement.value;
    const nuevoIngrediente = new Ingrediente(ingNombre, ingCantidad);
    this.ingredienteAgregado.emit(nuevoIngrediente);
  }
}
