//Tomas Estevez, Emilia Esborrat
//Comisión 3
//Pelicula "Pearl"
// https://youtu.be/eJ015aBNWEw


let j, jugador, hacha, tiempoInicio, estado, mira, personaje;
let fondo;
let gifpearl;
let sonido;

function preload() {
  fondo = loadImage("data/fondo.jpg");
  gifpearl = loadImage("data/jurado.png");
    imagenHacha = loadImage('data/hacha.png'); 
      sonido = loadSound('data/sonido.mp3');
    
}

function setup() {
  createCanvas(640, 480);

  j = new pearl(); 
  personaje = new Personaje();
  personaje.cargarImagen(); 
  jugador = new Jugador(); 
  tiempoInicio = millis(); 
  estado = "inicio"; 
  fondo.resize(640, 480);
  mira = new Mira(); 
}

function draw() {
  image(fondo, 0, 0);
  
  if (estado === "jugando") {
  personaje.dibujar();
  jugar();
}


  if (estado === "inicio") {
    mostrarInstrucciones();
  } else if (estado === "jugando") {
    jugar();
  } else if (estado === "victoria") {
    pantallaVictoria();
  } else if (estado === "derrota") {
    pantallaDerrota();
  }
}

function mousePressed() {
  if (estado === "jugando") {
    jugador.disparar(hacha, personaje, j); // Disparar desde el personaje hacia el jabalí.
  } 
}


function keyPressed() {
   if (!sonido.isPlaying()) {
    sonido.play();
  } if (estado === "inicio" && key === "Enter") {
    iniciarJuego();
  } else if ((estado === "victoria" || estado === "derrota") && key === "r") {
    reiniciarJuego();
  }
}

function jugar() {
  j.dibujar();
  j.mover();

  for (let i = hacha.length - 1; i >= 0; i--) {
    hacha[i].dibujar();
    hacha[i].mover();

    if (hacha[i].verificarColision(j)) {
      j.recibirDisparo();
      hacha.splice(i, 1);
      if (!j.vivo) {
        estado = "victoria";
      }
    } else if (hacha[i].fueraDePantalla()) {
      hacha.splice(i, 1);
    }
  }

  let tiempoRestante = 60 - floor((millis() - tiempoInicio) / 1000);
  fill(255);
  textSize(20);
  text(`Tiempo: ${tiempoRestante}s`, width - 100, 30);

  if (tiempoRestante <= 0) {
    estado = "derrota";
  }

  mira.dibujar(mouseX, mouseY);
}
