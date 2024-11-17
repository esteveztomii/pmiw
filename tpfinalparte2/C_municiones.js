class hachas {
  constructor(x, y, dirX, dirY) {
    this.x = x;          // Posición inicial en X.
    this.y = y;          // Posición inicial en Y.
    this.dirX = dirX;    // Dirección horizontal normalizada.
    this.dirY = dirY;    // Dirección vertical normalizada.
    this.vel = 8;        // Velocidad constante de la hacha.
    this.tam = 60;       // Tamaño de la hacha.
     this.imagen = loadImage('data/hacha.png');
  }

  dibujar() {
       image(this.imagen, this.x, this.y, this.tam, this.tam);
  }

  mover() {
    this.x += this.dirX * this.vel; // Mover en la dirección X.
    this.y += this.dirY * this.vel; // Mover en la dirección Y.
  }

  fueraDePantalla() {
    return this.x < 0 || this.x > width || this.y < 0 || this.y > height;
  }

  verificarColision(pearl) {
    let d = dist(this.x, this.y, pearl.posX, pearl.posY);
    return d < pearl.tam / 2;
  }
}
