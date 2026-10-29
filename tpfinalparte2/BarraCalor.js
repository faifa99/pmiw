class BarraCalor{
constructor(){
this.posX=20;
this.posY=20;
this.ancho=200;
this.alto=16;
this.valor=100;
}
  dibujarBarra() {
    push();
    // marco
    stroke(255);
    fill(40, 25, 9);
    rect(this.posX, this.posY, this.ancho, this.alto);
    // relleno
    noStroke();
    fill(226, 75, 74);
    rect(this.posX, this.posY, this.valor*2, this.alto);
    pop();
  }
}
class Temporizador {
  constructor() {
    this.segundos = 0;
    this.frames = 0;
  }

  actualizar() {
    this.frames++;
    // Como p5.js corre a 60 cuadros por segundo, cada 60 frames es 1 segundo
    if (this.frames >= 60) {
      this.segundos++;
      this.frames = 0;
    }
  }

  dibujarCronometro() {
    push();
    fill(0, 180);
    noStroke();
    rect(width - 160, 20, 140, 40, 8);
    
    fill(255);
    textSize(16);
    textAlign(CENTER, CENTER);
    text("Resistí: " + this.segundos + " s", width - 90, 40);
    pop();
  }

  reiniciar() {
    this.segundos = 0;
    this.frames = 0;
  }
}
