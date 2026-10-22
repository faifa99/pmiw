let jones;
let ambiente;
function setup() {
  createCanvas(640, 480);
  jones = new Jones(60);
  ambiente= new Ambiente();
}

function draw() {
  background(249, 206, 134);
  ambiente.dibujarAmbiente();
  jones.moverMisterJones();
  jones.dibujarMisterJones();
}
