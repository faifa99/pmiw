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
