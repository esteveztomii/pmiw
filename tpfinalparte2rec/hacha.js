class Hachas {
  constructor(x, y, dirX, dirY) {
    this.x = x;
    this.y = y;
    this.dirX = dirX;
    this.dirY = dirY;
    this.vel = 8;
    this.tam = 60;
    this.imagen = imagenHacha;
  }

  dibujar() {
    if (this.imagen) {
      image(this.imagen, this.x - this.tam / 2, this.y - this.tam / 2, this.tam, this.tam);
    } else {
      fill(255, 0, 0);
      ellipse(this.x, this.y, this.tam, this.tam);
    }
  }

  mover() {
    this.x += this.dirX * this.vel;
    this.y += this.dirY * this.vel;
  }

  fueraDePantalla() {
    return this.x < 0 || this.x > width || this.y < 0 || this.y > height;
  }

  verificarColision(pearl) {
    let d = dist(this.x, this.y, pearl.posX, pearl.posY);
    return d < pearl.tam / 2;
  }
}
