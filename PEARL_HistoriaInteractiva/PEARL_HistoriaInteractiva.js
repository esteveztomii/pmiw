//Tomas Estevez-Emilia Esborrat-Comisión 3

let estado;
let textos = [];
let botonA = [];
let botonB = [];
let sonido;
let imagenes = []; 
let imagenInicio, imagenCreditos;
let fuenteTexto;
let fuenteBotones;


function preload() {
   
   
     sonido = loadSound('data/miSonido.mp3');
     
    imagenInicio = loadImage("data/imagenInicio.jpg");
    imagenCreditos = loadImage("data/imagenCreditos.jpg");
     for (let i = 1; i <= 10; i++) {
        imagenes[i] = loadImage(`data/imagen${i}.jpg`);
          fuenteTexto = loadFont('data/fuenteTexto.ttf');
          fuenteBotones = loadFont('data/fuenteBotones.ttf');
     }
   
}

function setup() {
  createCanvas(640, 480);
  textSize(32);
  inicializar();
}

function draw() {
  
     
     
  if (estado === 0) {
    pantallaInicio();
  } else if (estado === 100) {
    pantallaCreditos();
  } else if (estado === 1 || estado === 2 || estado === 3 || estado === 9 || estado === 10) {
    pantallaHistoriaUnBoton(textos[estado], botonB[estado]);
  } else if (estado === 4 || estado === 5 || estado === 8) {
    pantallaHistoriaDosBotones(textos[estado], botonA[estado], botonB[estado]);
  } else if (estado === 6 || estado === 7) {
    pantallaHistoriaUnBoton(textos[estado], botonB[estado]);
  }
}

function mousePressed() {
  
    if (sonido.isPlaying()) {
       sonido.stop();
     } else {
       sonido.play();
     }
  
  if (estado === 0) {
    if (colisionBoton(width/2, height*0.75, 200, 40)) { // EMPEZAR
      estado = 1;
    } else if (colisionBoton(width/2, height*0.75 + 60, 200, 40)) { // CREDITOS
      estado = 100;
    }
  } else if (estado === 100) {
    if (colisionBoton(width/2, height*0.75 + 60, 200, 40)) { // VOLVER
      estado = 0;
    }
  } else if (estado === 1) {
    if (colisionBoton(width/2, height*0.75 + 60, 200, 40)) { // A
      estado = 2;
    }
  } else if (estado === 2) {
    if (colisionBoton(width/2, height*0.75 + 60, 200, 40)) { // A
      estado = 3;
    }
  } else if (estado === 3) {
    if (colisionBoton(width/2, height*0.75 + 60, 200, 40)) { // A
      estado = 4;
    }
  } else if (estado === 4) {
    if (colisionBoton(width/2 - 200, height*0.75 + 60, 200, 40)) { // A
      estado = 5;
    } else if (colisionBoton(width/2 + 200, height*0.75 + 60, 200, 40)) { // B
      estado = 8;
    }
  } else if (estado === 5) {
    if (colisionBoton(width/2 - 200, height*0.75 + 60, 200, 40)) { // A
      estado = 6;
    } else if (colisionBoton(width/2 + 200, height*0.75 + 60, 200, 40)) { // B
      estado = 7;
    }
  } else if (estado === 6 || estado === 7) {
    if (colisionBoton(width/2 , height*0.75 + 60, 200, 40)) {
      estado = 100;
    }
  } else if (estado === 8) {
    if (colisionBoton(width/2 - 200, height*0.75 + 60, 200, 40)) { // A
      estado = 9;
    } else if (colisionBoton(width/2 + 200, height*0.75 + 60, 200, 40)) { // B
      estado = 10;
    }
  } else if (estado === 9 || estado === 10) {
    if (colisionBoton(width/2 , height*0.75 + 60, 200, 40)) {
      estado = 100;
    }
  }
  console.log("estado: " + estado);
}

function inicializar() {
  estado = 0;
  
  // Carga de textos y botones:
  textos[1] = "Pearl vive en una granja aislada y sueña con una vida mejor.";
  botonB[1] = "Siguiente";

  textos[2] = "Su madre, Ruth, es estricta y controladora.";
  botonB[2] = "Siguiente";

  textos[3] = "Pearl conoce a un proyeccionista que le  \n habla de una audición que podría cambiar su vida.";
  botonB[3] = "Siguiente";

  textos[4] = "Pearl fracasa en la audición y queda llena de ira.";
  botonA[4] = "Opción 1";
  botonB[4] = "Opción 2";

  textos[5] = "Pearl vuelve a casa frustrada y envuelta en lágrimas.";
  botonA[5] = "Matar a sus padres.";
  botonB[5] = "Matar al proyeccionista.";

  textos[6] = "Pearl mata a sus padres para liberarse de su vida.";
  botonB[6] = "Fin.";

  textos[7] = "Pearl asesina al proyeccionista por traicionarla.";
  botonB[7] = "Fin.";

  textos[8] = "Pearl decide vengarse del jurado que la rechazó.";
  botonA[8] = "Acabar con sufrimiento.";
  botonB[8] = "Volver a casa.";

  textos[9] = "Pearl, devastada, se arroja al lago y es devorada por un cocodrilo.";
  botonB[9] = "Fin.";

  textos[10] = "Pearl, consumida por el remordimiento, se entrega a las autoridades.";
  botonB[10] = "Fin.";
}

function dibujaBoton(txt, x, y, w, h) {
  push();
  rectMode(CENTER);
  
  
  textSize(16);
  textFont(fuenteBotones);
    noStroke();
  
  if (colisionBoton(x, y, w, h)) {
    fill(150, 33, 29);
  } else {
    fill(138, 90, 60);
  }
  rect(x, y, w, h);
  textAlign(CENTER, CENTER);
   fill(244, 225, 210);
  text(txt, x, y);
  pop();
}

function colisionBoton(x, y, w, h) {
  return (mouseX > x - w / 2 && mouseX < x + w / 2 && mouseY > y - h / 2 && mouseY < y + h / 2);
}

function pantallaInicio() {
  push();
  background(255, 0, 0);
  image (imagenInicio, 0,0,width,height-100);
  textFont(fuenteTexto);
  fill(255);
  textAlign(CENTER);
  textSize(24);

  dibujaBoton("Empezar", width / 2, height * 0.75, 200, 40);
  dibujaBoton("Créditos", width / 2, height * 0.75 + 60, 200, 40);
  pop();
}

function pantallaCreditos() {
  push();
   image (imagenCreditos,0,0,width,height);
   textFont(fuenteTexto);
  fill(255);
  textAlign(CENTER);
  textSize(24);

  dibujaBoton("Volver", width / 2, height * 0.75 + 60, 200, 40);
  pop();
}

function pantallaHistoriaDosBotones(txt_pantalla, txt_btn_A, txt_btn_B) {
  push();
  background(255, 0, 0);
   if (imagenes[estado]) {
    image(imagenes[estado], 0, 0, width, height); // Ajusta el tamaño de la imagen si es necesario
  }
  textFont(fuenteTexto);
  fill(138, 3, 3);
  textAlign(CENTER);
  textSize(24);
   let offsetX = 2; 
  let offsetY = 2; 
  fill(166, 127, 89); 
  text(txt_pantalla, width / 2 + offsetX, height * 0.1 + offsetY); 
  fill(244, 225, 210); 
  text(txt_pantalla, width / 2, height * 0.1); 

  dibujaBoton(txt_btn_A, width / 2 - 200, height * 0.75 + 60, 200, 40);
  dibujaBoton(txt_btn_B, width / 2 + 200, height * 0.75 + 60, 200, 40);
  pop();
}

function pantallaHistoriaUnBoton(txt_pantalla, txt_btn_A) {
  push();
  background(255, 0, 0);
  if (imagenes[estado]) {
    image(imagenes[estado], 0, 0, width, height); 
  }
  textFont(fuenteTexto);
  fill(138, 3, 3);
  textAlign(CENTER);
  textSize(24);
   let offsetX = 2; 
  let offsetY = 2; 
  fill(166, 127, 89); // Color de la sombra
  text(txt_pantalla, width / 2 + offsetX, height * 0.1 + offsetY); 
  fill(244, 225, 210); 
  text(txt_pantalla, width / 2, height * 0.1); 

  dibujaBoton(txt_btn_A, width/2, height * 0.75 + 60, 200, 40);
  pop();
}
