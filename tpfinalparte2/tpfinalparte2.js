let jones;
let ambiente;
let barra;
let nube;
let temporizador;

function setup() {
  createCanvas(640, 480);
  jones = new Jones();
  ambiente = new Ambiente();
  barra = new BarraCalor();
  nube= new Nube();
  temporizador= new Temporizador();
  
}

function draw() {
  ambiente.dibujarAmbiente();
  jones.moverMisterJones();
  jones.dibujarMisterJones();
  barra.dibujarBarra();
  nube.dibujarNube();
  jones.moverMisterJones();
  jones.dibujarMisterJones();
}
