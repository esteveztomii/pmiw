function mostrarInstrucciones() {
  background(0, 150);
  textAlign(CENTER, TOP);
  fill(255);
  textSize(20);
  textStyle(BOLD);

  text(
    "Pearl se re calento porque el jurado la bocho \n ¡ayudala a matarlos!\nClick para disparar\n Presiona ENTER para comenzar",
    width / 2,
    height / 2 - 60
    );
}

function pantallaVictoria() {
  textAlign(CENTER, TOP);
  fill(0, 255, 0);
  textSize(30);
  text("¡Ganaste!\n bien ahí\n Presiona R para reiniciar", width / 2, height / 2);
}

function pantallaDerrota() {
  textAlign(CENTER, TOP);
  fill(255, 0, 0);
  textSize(30);
  text("¡Perdiste!\n dormiste \n Presiona R para reiniciar", width / 2, height / 2);
}

function iniciarJuego() {
  estado = "jugando";
  tiempoInicio = millis();
  j = new pearl();
  hacha = [];
}

function reiniciarJuego() {
  estado = "inicio";
}
