class Personaje {
  constructor() {
    this.x = width / 2; // Posición inicial en el centro horizontal de la pantalla.
    this.y = height - 50; // Ubicación vertical cerca de la parte inferior.
    this.tam = 50; // Tamaño del personaje.
     this.imagen = null; // Variable para almacenar la imagen.
  }
  
   cargarImagen() {
    this.imagen = loadImage("data/personaje.png"); // Cargar la imagen desde la carpeta `data`.
  }

   dibujar() {
    if (this.imagen) {
      image(this.imagen, this.x - 20, this.y - 90, 110, 150); // Tamaño fijo de 50x50 píxeles.
    } else {
      fill(0, 0, 255); // Si no hay imagen, dibuja un círculo como respaldo.
      ellipse(this.x, this.y, this.tam, this.tam);
    }
  }
}
