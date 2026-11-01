class Nube {

  constructor() {
    this.posX= 0; // una pos inicial y luego movimientos ramdon
    this.posY=50; //
    this.ancho=200;
    this.alto=70;
    this.vel=3;
    this.objetivo = random(0, width - this.ancho);
  }
  moverNube() {
    this.posX = lerp(this.posX, this.objetivo, 0.04);
    if (abs(this.posX - this.objetivo) < 5) {
      this.objetivo = random(0, width - this.ancho);
    }
  }
  dibujarNube() {  
    fill(110,115,125);
    rect(this.posX, this.posY, this.ancho, this.alto);
    noStroke();
    fill(110, 100, 100, 100);
    rect(this.posX, this.posY + 70, this.ancho, this.alto + 200);
  }
  detectarJones(jones){
  if(jones.posX + jones.ancho > this.posX && jones.posX < this.posX + this.ancho){
    console.log("detecto");
    console.log("no detecto");
    return jones.posX + jones.ancho > this.posX && jones.posX < this.posX + this.ancho;
  }
  }
}    
