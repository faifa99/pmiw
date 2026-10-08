
let estado = 0;
let insolacion = [];
let textos = [];
let flecha;
let reiniciarIcono;
let contadorFinal = 0;
let creditosAnimacion;

// Variables para la flecha
let flechaX = 710;
let flechaY = 380;
let flechaAncho = 50;
let flechaAlto = 40;

// Variables para los botones
let botonAncho = 160;
let botonAlto = 50;
let botonYDist = 95; 

// Botón Izquierdo
let botonIzqX = 30;

// Botón Derecho
let botonDerX = 440;

// Variables para animar los botones
let rectXDer = 800;
let textoXDer = 800;
let textoXIzq = -200;
let rectXIzq = -200;
let textoX = 50;

// Variables para los textos de los botones
let textoDer = "";
let textoIzq = "";

// Posición en X fondo del texto
let cajaY = 450;

// Sonidos
let click;
let ambiente;

function preload() {
  for (let i = 0; i < 20; i++) {
    insolacion[i] = loadImage("data/insolacion" + i + ".png");
  }
  flecha = loadImage("data/flecha.png");
  reiniciarIcono = loadImage("data/reiniciar.png");
  
  textos = loadStrings("data/insolacion.txt");
  click = loadSound("data/click.mp3");
  ambiente = loadSound("data/ambiente.mp3");
}

function setup() {
  createCanvas(800, 450); 
}

function draw() {
  background(0);
  
  if (estado !== 20) {
    if (!ambiente.isPlaying()) {
      ambiente.play(); 
    }
  } else {
    if (ambiente.isPlaying()) {
      ambiente.stop();
    }
  }

  if (estado === 8 || estado === 11 || estado === 18) {
    contadorFinal++;

    if (contadorFinal > 300) {
      estado = 20;
      contadorFinal = 0;
      cajaY = height;
      flechaY = cajaY + 105; 
      textoX = 0;
      creditosAnimacion = 0;
    }
  } else {
    contadorFinal = 0;
  }

  if (estado !== 20 && insolacion[estado]) {
    image(insolacion[estado], 0, 0, width, height);
  }
  
  if (estado !== 20) {
    cajaY = lerp(cajaY, 275, 0.15);
    push();
    noStroke();
    fill(60, 60, 60, 170);
    rect(20, cajaY, 760, 160, 20);
    pop();
    
    if (textoX < 50) {
      textoX += 5;
    }
    
    fill(250);
    textSize(18);
    if (textos[estado]) {
      text(textos[estado], textoX + 20, cajaY + 30, 720, 120);
    }

    if (estado === 2 || estado === 5 || estado === 14) {
      if (textoXDer > 450) {
        textoXDer -= 5;
        rectXDer -= 5;
      }
      if (textoXIzq < 50) {
        textoXIzq += 5;
        rectXIzq += 5;
      }
    }
      
    textSize(14);
    if (estado === 2 || estado === 5 || estado === 14) {
      // Botón Derecho
      fill(40, 40, 40, 215);  
      rect(rectXDer, cajaY + botonYDist, botonAncho, botonAlto);
      fill(255);  
      text(textoDer, textoXDer, cajaY + botonYDist + 15);

      // Botón Izquierdo
      fill(40, 40, 40, 215);  
      rect(rectXIzq, cajaY + botonYDist, botonAncho, botonAlto);
      fill(255);  
      text(textoIzq, textoXIzq, cajaY + botonYDist + 15);
    } 
    else if (estado !== 8 && estado !== 11 && estado !== 18) {
      flechaY = cajaY + 105;  
      image(flecha, flechaX, flechaY, flechaAncho, flechaAlto);
    }
  }
  else if (estado === 20) {
    if (creditosAnimacion < 255) {
      creditosAnimacion += 4;  
    }
    
    push();
    noStroke();
    fill(0, creditosAnimacion);
    rect(0, 0, width, height);
    pop();

    fill(250, creditosAnimacion);
    textSize(18);
    textAlign(CENTER, CENTER);

    text(textos[20], width / 2, 150);
    text(textos[21], width / 2, 200);
    text(textos[22], width / 2, 250);
    text(textos[23], width / 2, 300);

    textAlign(LEFT, BASELINE); 
    
    flechaY = 380;  
    tint(255, creditosAnimacion);
    image(reiniciarIcono, flechaX, flechaY, flechaAncho, flechaAlto);
    noTint();
  }
}

function mousePressed() {
  if (estado === 20) {
    if (detectarBoton(flechaX, 380, flechaAncho, flechaAlto)) {
      if (!click.isPlaying()) {
        click.play();
      }
      estado = 0;
      cajaY = height;
      flechaY = cajaY + 105; 
      textoX = 0;
      contadorFinal = 0;
    }
  } 
  else if (estado === 2 || estado === 5 || estado === 14) {
    if (detectarBoton(botonDerX, cajaY + botonYDist, botonAncho, botonAlto)) {
      if (!click.isPlaying()) {
        click.play();
      }
      cajaY = height;
      flechaY = cajaY + 105; 
      textoX = 0;
      reiniciarBotones();

      if (estado === 2) {
        estado = 3;  
      } else if (estado === 5) {
        estado = 6;
      } else if (estado === 14) {
        estado = 19;  
      }
    }
    else if (detectarBoton(botonIzqX, cajaY + botonYDist, botonAncho, botonAlto)) {
      if (!click.isPlaying()) {
        click.play();
      }
      cajaY = height;
      flechaY = cajaY + 105; 
      textoX = 0;
      reiniciarBotones();

      if (estado === 2) {
        estado = 12;  
      } else if (estado === 5) {
        estado = 9;
      } else if (estado === 14) {
        estado = 15;  
      }   
    }   
  } 
 else if (estado !== 8 && estado !== 11 && estado !== 18) {
    if (detectarBoton(flechaX, flechaY, flechaAncho, flechaAlto)) {
      click.stop();
      click.play();
      cajaY = height;  
      flechaY = cajaY + 105; 

      if (estado === 19) {
        estado = 8;  
        textoX = 0;
      } else if (estado < 19) {
        estado++;  
        textoX = 0;
      }      

      if (estado === 2) {
        textoDer = "AVANZAR AL CAMPO.";
        textoIzq = "IR A LA SOMBRA.";
        reiniciarBotones();
      } else if (estado === 5) {
        textoDer = "TOMAR CAÑA.";
        textoIzq = "PEDIR AYUDA.";
        reiniciarBotones();
      } else if (estado === 14) {
        textoDer = "SALES A TRABAJAR\nBAJO EL SOL";
        textoIzq = "TE QUEDAS BAJO\nTECHO TRABAJANDO";
        reiniciarBotones();
      }
    }
  }
}
function reiniciarBotones() {
  textoXDer = 800;
  rectXDer = 800;
  textoXIzq = -200;
  rectXIzq = -200;
}

function detectarBoton(x, y, ancho, alto) {
  return mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto;
}
