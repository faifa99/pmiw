class Jones {
  constructor() {
    this.posX = 100;
    this.posY = 290;
    this.ancho = 30;
    this.alto = 60;
    this.anchoPierna = 10;
    this.largoPierna = 30;
    this.vel = 2;
  }
  dibujarMisterJones() {
    // piernas
    fill(47, 74, 99);
    rect(this.posX + 3, this.posY + this.alto, this.anchoPierna, this.largoPierna);
    rect(this.posX + 17, this.posY + this.alto, this.anchoPierna, this.largoPierna);
    // cuerpo
    fill(60, 90, 120);
    rect(this.posX, this.posY, this.ancho, this.alto);
    // cabeza
    fill(224, 180, 138);
    ellipse(this.posX + 15, this.posY - 10, 24);
    // sombrero
    fill(217, 200, 154);
    rect(this.posX - 5, this.posY - 15, 40, 5);
  }
  moverMisterJones() {
    if (keyIsDown(LEFT_ARROW)) {
      this.posX -= this.vel;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.posX += this.vel;
    }
    this.posX = constrain(this.posX, 0, width - this.ancho);
  }
}
