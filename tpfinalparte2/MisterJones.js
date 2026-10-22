class Jones {

  constructor(tama) {
    this.posX=100;
    this.posY=290;
    this.tama=tama;
    this.vel=2;
  }
  dibujarMisterJones() {
    fill(47, 74, 99);
    let anchoPierna = this.tama / 6;
    let largoPierna = this.tama / 2;
    rect(this.posX + this.tama / 20, this.posY + this.tama, anchoPierna, largoPierna);
    rect(this.posX + this.tama / 2 - anchoPierna - this.tama / 20, this.posY + this.tama, anchoPierna, largoPierna);
    fill(60, 90, 120);
    rect(this.posX, this.posY, this.tama / 2, this.tama);
    // cabeza
    fill(224, 180, 138);
    ellipse(this.posX + this.tama / 4, this.posY - this.tama / 6, this.tama / 2.5);
    // sombrero
    fill(217, 200, 154);
    rect(this.posX - 5, this.posY - this.tama / 4, this.tama / 2 + 10, 5);
  }
  moverMisterJones() {
    if (keyIsDown(LEFT_ARROW)) {
      this.posX -= this.vel;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.posX += this.vel;
    }
    // que no se salga de la pantalla
    this.posX = constrain(this.posX, 0, width - this.tama / 2);
  }
}
