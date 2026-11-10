let ambiente;
let imagenes = [];
let click;
let musica;

function preload() {
  for (let i = 0; i < 2; i++) {
    imagenes[i] = loadImage("data/imagen" + i + ".png");
  }
  click = loadSound("data/click.mp3");
  musica = loadSound("data/ambiente.mp3");
}
function setup() {
  createCanvas(640, 480);
ambiente = new Ambiente(imagenes, click, musica);2 // le pasa el arreglo de imágenes al constructor
}

function draw() {
  ambiente.actualizar();
}

function mousePressed() {
  ambiente.clic();
}

function keyPressed() {
  ambiente.tecla();
}
