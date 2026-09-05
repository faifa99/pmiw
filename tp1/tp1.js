let pantalla = "inicio";
let estado;
let fondo, fondo2;
let imagenes = [];
let cantImag = 20;
let posX, posY;
let vel;
let cont;
let posCue, posCab; 
function preload() {
  fondo = loadImage('data/h.png');
  fondo2 = loadImage('data/f.png');
  fondo3 = loadImage('data/fondo3.png');
  for (let i = 1; i <= cantImag; i++) {
    imagenes[i] = loadImage('data/' + i + '.png');
  }
}
function setup() {
  createCanvas(800, 600);
  fondo.resize(800, 600);
  fondo3.resize(800, 600);
  for (let i = 1; i <= cantImag; i++) {
    if (i === 1) {
      imagenes[i].resize(550, 250);
    } else if (i === 2) {
      imagenes[i].resize(100, 100);
    } else if (i >= 3 && i <= 13) {
      imagenes[i].resize(25, 25);
    } else if (i >= 14) {
      imagenes[i].resize(40, 40);
    }
  }
}
function draw() {
  background(0);
  if (pantalla === 'inicio') {
    inicio();
  } else if (pantalla === 'animacion') {
    animacion();
  } else if (pantalla === 'final') {
    final();
  }
}
function inicio() {
  let botonX = 300;
  let botonY = 450;
  let botonAncho = 200;
  let botonAlto = 100;
  image(fondo2, 0, 0);
  image(imagenes[1], 150, 50);
  image(imagenes[2], 350, 300);
  fill(50, 150, 250);
  stroke(0);
  strokeWeight(3);
  rect(botonX, botonY, botonAncho, botonAlto);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(28);
  text('INICIAR', botonX + botonAncho / 2, botonY + botonAlto / 2);
  if (mouseIsPressed && mouseX > botonX && mouseX < botonX + botonAncho &&
      mouseY > botonY && mouseY < botonY + botonAlto) {
    reiniciarAnimacion();
    pantalla = "animacion";
  }
}

function final() {
  let botonX = 250;
  let botonY = 450;
  let botonAncho = 300;
  let botonAlto = 100;
  image(fondo3, 0, 0);
  fill(50, 150, 250);
  stroke(0);
  strokeWeight(3);
  rect(botonX, botonY, botonAncho, botonAlto);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(28);
  text('VOLVER AL INICIO', botonX + botonAncho / 2, botonY + botonAlto / 2);
  if (mouseIsPressed && mouseX > botonX && mouseX < botonX + botonAncho &&
      mouseY > botonY && mouseY < botonY + botonAlto) {
    pantalla = "inicio";
  }
}
function reiniciarAnimacion() {
  estado = 0;
  vel = 1.5; 
  posX = 100;
  posY = 280;
  cont = 0;
  posCue = 3;
  posCab = 14;
}
function moverEnEje(posActual, destino, velocidad, sentido) {
  if (sentido === 1 && posActual < destino) {
    return posActual + velocidad;
  } else if (sentido === -1 && posActual > destino) {
    return posActual - velocidad;
  }
  return posActual;
}
function dibujarPersonaje(cuerpo, cabeza, x, y) {
  image(imagenes[cuerpo], x, y);
  image(imagenes[cabeza], x - 6, y - 35);
}

function animacion() {
  image(fondo, 0, 0);
  if (estado === 0) { // reposo: cicla frames de cuerpo y cabeza
    dibujarPersonaje(13, 18, posX, posY);
    cont++;
    if (cont > 60) {
      estado++;
      cont = 0;
    }
  }

  if (estado === 1) { // movimiento a la derecha en X
    if (frameCount % 6 === 0) {
      posCue++;
      if (posCue > 8) {
        posCue = 3;
        posCab++;
        if (posCab > 17) {
          posCab = 15;
        }
      }
    }
    dibujarPersonaje(posCue, posCab, posX, posY);
    posX = moverEnEje(posX, 350, vel, 1);
    if (posX >= 350) {
      estado++;
      cont = 0;
    }
  }

  if (estado === 2) { // movimiento hacia abajo en Y
    if (frameCount % 6 === 0) {
      posCue++;
      if (posCue >= 13) {
        posCue = 9;
        posCab++;
        if (posCab > 17) {
          posCab = 15;
        }
      }
    }
    dibujarPersonaje(posCue, posCab, posX, posY);
    posY = moverEnEje(posY, 450, vel, 1);
    if (posY >= 450) {
      estado++;
      cont = 0;
    }
  }

  if (estado === 3) { // movimiento a la derecha en X
    if (frameCount % 6 === 0) {
      posCue++;
      if (posCue > 8) {
        posCue = 3;
        posCab++;
        if (posCab > 17) {
          posCab = 15;
        }
      }
    }
    dibujarPersonaje(posCue, posCab, posX, posY);
    posX = moverEnEje(posX, 600, vel, 1);
    if (posX >= 600) {
      estado++;
      cont = 0;
    }
  }

  if (estado === 4) { // movimiento hacia arriba en Y
    if (frameCount % 6 === 0) {
      posCue++;
      if (posCue > 13) {
        posCue = 9;
        posCab = 14;
      }
    }
    dibujarPersonaje(posCue, posCab, posX, posY);
    posY = moverEnEje(posY, 280, vel, -1);
    if (posY <= 280) {
      estado++;
      cont = 0;
    }
  }
  if (estado === 5) { // movimiento a la derecha en X
    if (frameCount % 6 === 0) {
      posCue++;
      if (posCue > 8) {
        posCue = 3;
        posCab++;
        if (posCab > 17) {
          posCab = 15;
        }
      }
    }
    dibujarPersonaje(posCue, posCab, posX, posY);
    posX = moverEnEje(posX, 700, vel, 1);
    if (posX >= 700) {
      pantalla = "final";
    }
  }
 console.log("estado:", estado, "posX:", posX, "posY:", posY);
 console.log("posX:", posX ,"posy", posY);
 console.log("pantalla",pantalla);
}
