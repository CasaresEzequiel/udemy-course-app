import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecetaService } from '../receta.service';

@Component({
  selector: 'app-receta-editar',
  templateUrl: './receta-editar.component.html',
  styleUrl: './receta-editar.component.css',
})
export class RecetaEditarComponent implements OnInit {
  id: number;
  editMode = false;
  recetaForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recetaServicio: RecetaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.recetaServicio.actualizarReceta(this.id, this.recetaForm.value);
    } else {
      this.recetaServicio.agregarReceta(this.recetaForm.value);
    }
    this.onCancelar();
  }

  onAgregarIngrediente() {
    (<FormArray>this.recetaForm.get('ingredientes')).push(
      new FormGroup({
        nombre: new FormControl(null, Validators.required),
        cantidad: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  get controls() {
    return (<FormArray>this.recetaForm.get('ingredientes')).controls;
  }

  onEliminarIngrediente(index: number) {
    (<FormArray>this.recetaForm.get('ingredientes')).removeAt(index);
  }

  onCancelar() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let nombreReceta = '';
    let recetaImgPath = '';
    let recetaDescripcion = '';
    let recetaIngredientes = new FormArray([]);

    if (this.editMode) {
      const receta = this.recetaServicio.getReceta(this.id);
      nombreReceta = receta.nombre;
      recetaImgPath = receta.imagenPath;
      recetaDescripcion = receta.descripcion;
      if (receta['ingredientes']) {
        for (let ing of receta.ingredientes) {
          recetaIngredientes.push(
            new FormGroup({
              nombre: new FormControl(ing.nombre, Validators.required),
              cantidad: new FormControl(ing.cantidad, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }
    this.recetaForm = new FormGroup({
      nombre: new FormControl(nombreReceta, Validators.required),
      imagenPath: new FormControl(recetaImgPath, Validators.required),
      descripcion: new FormControl(recetaDescripcion, Validators.required),
      ingredientes: recetaIngredientes,
    });
  }
}
