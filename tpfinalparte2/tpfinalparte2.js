let jones;
let ambiente;
let barra;

function setup() {
  createCanvas(640, 480);
  jones = new Jones();
  ambiente = new Ambiente();
  barra = new BarraCalor();
}

function draw() {
  ambiente.dibujarAmbiente();
  jones.moverMisterJones();
  jones.dibujarMisterJones();
  barra.dibujarBarra();
}
