let tiempoRestante = 90 - floor((millis() - tiempoInicio) / 1000);
fill(255);
textSize(20);
text(`Tiempo:
$ {
  tiempoRestante
}
s`, width - 100, 30);
text(`Munición:
$ {
  jugador.municion
}
`, 20, 30);

if (tiempoRestante <= 0) {
  estado = "derrota";
}
