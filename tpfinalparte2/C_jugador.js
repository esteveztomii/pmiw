class Jugador {
  disparar(hacha, personaje, pearl) {
    // Calcular dirección hacia el jabalí.
    let dx = pearl.posX - personaje.x; // Diferencia en X.
    let dy = pearl.posY - personaje.y; // Diferencia en Y.
    let mag = sqrt(dx * dx + dy * dy); // Magnitud del vector.

    // Normalizar el vector de dirección y crear la flecha.
    hacha.push(new hachas(personaje.x, personaje.y, dx / mag, dy / mag));
  }
}
