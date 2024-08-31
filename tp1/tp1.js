//https://youtu.be/2v28JPa_c4U
//Tomas Estevez

let img1;
let cant, tam, startX, aumentar;

function preload(){
  img1=loadImage("data/arteoptico.jpeg");
}

function setup(){
 createCanvas(800,400);
 

  cant=14;
  startX=width/2;
  tam= width/cant;
  aumentar=0;
}

function draw(){
background(0);
image(img1,0,0,width/2,height);

aumentarFormas();

  let mensaje = funcionamiento();
  textSize(20);
  fill(0,255,0);
  text(mensaje, 10, height-60);  
  
  for (let i=0;i<cant;i++){
  for(let x=0;x<cant;x++){
    
    let distancia = dist(mouseX, mouseY, startX+i*tam, x*tam);
    let tono= distancia*255/dist(width, height, 0,0);
    fill(random(200,255),tono);
    
    push();
    stroke(255,100);
    strokeWeight(24);
    fill(0);
    rect(startX+i*tam,x*tam,tam+aumentar,tam+aumentar);
         pop();
         noStroke();
    ellipse(startX+i*tam,x*tam,25+aumentar,25+aumentar);

  
  }
}

}

function aumentarFormas(){
  if (mouseIsPressed){
    aumentar +=5;
} else{ 
  }
}

  function keyPressed() {
    if (keyIsPressed && keyCode == ENTER) {  
    aumentar = 0; 
}
  }
  
 function funcionamiento() {
  return "Bienvenido al programa. \n Aumente el tamaño presionando el\n mouse y reinicie el mismo con ENTER";
}
