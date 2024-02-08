import { Ingrediente } from '../shared/ingrediente.model';

export class Receta {
  public nombre: string;
  public descripcion: string;
  public imagenPath: string;
  public ingredientes: Ingrediente[];

  constructor(
    nombre: string,
    desc: string,
    imagenPath: string,
    ingredientes: Ingrediente[]
  ) {
    this.nombre = nombre;
    this.descripcion = desc;
    this.imagenPath = imagenPath;
    this.ingredientes = ingredientes;
  }
}
