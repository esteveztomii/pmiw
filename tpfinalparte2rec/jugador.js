class Jugador {
  disparar(hacha, personaje, pearl) {
    let dx = pearl.posX - personaje.x;
    let dy = pearl.posY - personaje.y;
    let mag = sqrt(dx * dx + dy * dy);

    hacha.push(new Hachas(personaje.x, personaje.y, dx / mag, dy / mag));
  }
}
