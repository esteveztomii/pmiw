let j, jugador, hacha, tiempoInicio, estado, mira, personaje, juego;
let fondo, gifpearl, sonido, imagenHacha;

function preload() {
  fondo = loadImage("data/fondo.jpg");
  gifpearl = loadImage("data/jurado.png");
  imagenHacha = loadImage("data/hacha.png");
  sonido = loadSound("data/sonido.mp3");
}

function setup() {
  createCanvas(640, 480);

  j = new Pearl();
  personaje = new Personaje();
  personaje.cargarImagen(); // Carga la imagen del personaje
  jugador = new Jugador();
  tiempoInicio = millis();
  estado = "inicio";
  fondo.resize(640, 480);
  mira = new Mira();
  juego = new Juego();
}

function draw() {
  image(fondo, 0, 0);
  juego.dibujarPantalla();
}

function mousePressed() {
  if (juego.estado === "jugando") {
    let dx = mouseX - personaje.x;
    let dy = mouseY - personaje.y;
    let mag = sqrt(dx * dx + dy * dy);
    let nuevaHacha = new Hachas(
      personaje.x,
      personaje.y,
      dx / mag,
      dy / mag
    );
    juego.hacha.push(nuevaHacha);
  }
}

function keyPressed() {
  if (!sonido.isPlaying()) {
    sonido.play();
  }
  if (juego.estado === "inicio" && key === "Enter") {
    juego.iniciarJuego();
  } else if ((juego.estado === "victoria" || juego.estado === "derrota") && key === "r") {
    juego.reiniciarJuego();
  }
}
