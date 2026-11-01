let jones;
let ambiente;
let barra;
let reloj;

function setup() {
  createCanvas(640, 480);
  jones = new Jones();
  ambiente = new Ambiente();
  barra = new BarraCalor();
  nube = new Nube();
  reloj = new Reloj();
}

function draw() {
  ambiente.dibujarAmbiente();
  jones.moverMisterJones();
  jones.dibujarMisterJones();
  barra.dibujarBarra(Nube);
  nube.dibujarNube();
  nube.moverNube(); 
  nube.detectarJones(jones);
  barra.dibujarBarra(nube.detectarJones(jones));
  if (barra.valor >= 100) {
    fill(255, 0, 0);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("PERDISTE", width / 2, height / 2);
    noLoop();
  }
  reloj.dibujarReloj();
  if (reloj.llegoAlFinal()) {
    background(0, 150, 0);
    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("GANASTE", width / 2, height / 2);
    noLoop();
}
}
