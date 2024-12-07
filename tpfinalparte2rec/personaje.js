class Personaje {
  constructor() {
    this.x = width / 2; // Posición inicial.
    this.y = height - 50; // Ubicación vertical.
    this.tam = 50; // Tamaño del personaje.
    this.imagen = null;
  }

  cargarImagen() {
    this.imagen = loadImage("data/personaje.png");
  }

  dibujar() {
    if (this.imagen) {
      image(this.imagen, this.x - 20, this.y - 90, 110, 150);
    } else {
      fill(0, 0, 255);
      ellipse(this.x, this.y, this.tam, this.tam);
    }
  }
}
