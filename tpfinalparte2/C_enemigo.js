class pearl {
  constructor() {
    this.posX = random(20, 610);
    this.posY = random(20, 240);
    this.velX = random([-3, 3]);
    this.velY = random([-2, 2]);
    this.vidas = 3;
    this.tam = 100;
    this.vivo = true;
  }

  dibujar() {
    if (this.vivo) {
      image(gifpearl, this.posX - this.tam / 2, this.posY - this.tam / 2, this.tam, this.tam);
      
        fill(255, 0, 0);
      textSize(20);
      textAlign(CENTER);
      text(`Vidas: ${this.vidas}`, this.posX, this.posY - this.tam / 2 - 10);
    }
  }

  mover() {
    this.posX += this.velX;
    this.posY += this.velY;

    if (this.posX <= 25 || this.posX >= width - 25) this.velX *= -1;
    if (this.posY <= 25 || this.posY >= height / 2) this.velY *= -1;
  }

  recibirDisparo() {
    this.vidas--;
    if (this.vidas <= 0) {
      this.vivo = false;
    }
  }
}
