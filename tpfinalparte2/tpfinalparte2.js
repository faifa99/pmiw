let ambiente;
let imgInicio;

function preload() {
  imgInicio = loadImage("data/videojuego.png");
}

function setup() {
  createCanvas(640, 480);
  ambiente = new Ambiente(imgInicio); // acá se le pasa la imagen al constructor
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
