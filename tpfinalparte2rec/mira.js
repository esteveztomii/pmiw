class Mira {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
  }

  dibujar(x, y) {
    this.x = x;
    this.y = y;
    push();
    stroke(0, 255, 0);
    strokeWeight(2);
    noFill();
    ellipse(this.x, this.y, 20, 20);
    line(this.x - 10, this.y, this.x + 10, this.y);
    line(this.x, this.y - 10, this.x, this.y + 10);
    pop();
  }
}
