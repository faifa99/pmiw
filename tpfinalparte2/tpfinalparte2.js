let ambiente;

function setup() {
  createCanvas(640, 480);
  ambiente = new Ambiente();
}

function draw() {
  ambiente.actualizar();
}

function keyPressed() {
  if (key === 'r' || key === 'R' || keyCode === 32) {
    ambiente.reiniciar();
  }
}
