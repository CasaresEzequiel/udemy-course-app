export class Receta {
  public nombre: string;
  public descripcion: string;
  public imagenPath: string;

  constructor(nombre: string, desc: string, imagenPath: string) {
    this.nombre = nombre;
    this.descripcion = desc;
    this.imagenPath = imagenPath;
  }
}
