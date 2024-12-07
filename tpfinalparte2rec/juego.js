class Juego {
  constructor() {
    this.estado = "inicio";
    this.tiempoInicio = 0;
    this.jugador = new Pearl();
    this.hacha = [];
    this.mira = new Mira();
  }

  iniciarJuego() {
    this.estado = "jugando";
    this.tiempoInicio = millis();
    this.jugador = new Pearl();
    this.hacha = [];
    this.mira = new Mira();
  }

  reiniciarJuego() {
    this.estado = "inicio";
  }

  jugar() {
    this.jugador.dibujar();
    this.jugador.mover();

    // Dibuja el personaje
    personaje.dibujar();

    // Manejo de las hachas
    for (let i = this.hacha.length - 1; i >= 0; i--) {
      this.hacha[i].dibujar();
      this.hacha[i].mover();

      if (this.hacha[i].verificarColision(this.jugador)) {
        this.jugador.recibirDisparo();
        this.hacha.splice(i, 1);
        if (!this.jugador.vivo) {
          this.estado = "victoria";
        }
      } else if (this.hacha[i].fueraDePantalla()) {
        this.hacha.splice(i, 1);
      }
    }

    // Tiempo restante
    let tiempoRestante = 60 - floor((millis() - this.tiempoInicio) / 1000);
    fill(255);
    textSize(20);
    text(`Tiempo: ${tiempoRestante}s`, width - 100, 30);

    if (tiempoRestante <= 0) {
      this.estado = "derrota";
    }

    this.mira.dibujar(mouseX, mouseY);
  }

  mostrarInstrucciones() {
    background(0, 150);
    textAlign(CENTER, TOP);
    fill(255);
    textSize(20);
    textStyle(BOLD);
    text(
      "Pearl se re calentó porque el jurado la bochó \n ¡Ayúdala a matarlos!\nClick para disparar\nPresiona ENTER para comenzar",
      width / 2,
      height / 2 - 60
    );
  }

  pantallaVictoria() {
    textAlign(CENTER, TOP);
    fill(0, 255, 0);
    textSize(30);
    text("¡Ganaste!\nBien ahí\nPresiona R para reiniciar", width / 2, height / 2);
  }

  pantallaDerrota() {
    textAlign(CENTER, TOP);
    fill(255, 0, 0);
    textSize(30);
    text("¡Perdiste!\nDormiste \nPresiona R para reiniciar", width / 2, height / 2);
  }

  dibujarPantalla() {
    if (this.estado === "inicio") {
      this.mostrarInstrucciones();
    } else if (this.estado === "jugando") {
      this.jugar();
    } else if (this.estado === "victoria") {
      this.pantallaVictoria();
    } else if (this.estado === "derrota") {
      this.pantallaDerrota();
    }
  }
}
