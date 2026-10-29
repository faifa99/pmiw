class Nube {
  constructor() {
    this.posX = 300;
    this.posY = 180;
    this.ancho = 140;
    this.alto = 50;
    this.vel = 1.5;
  }

  dibujarNube() {
    // Sombra en el suelo debajo de la nube (opcional para guiar visualmente)
    noStroke();
    fill(100, 70, 40, 100);
    rect(this.posX, 240, this.ancho, 140);

    // Dibujo de la nube (elipses unidas)
    fill(255, 255, 255, 220);
    ellipse(this.posX + 40, this.posY + 20, 70, 50);
    ellipse(this.posX + 85, this.posY + 15, 80, 60);
    ellipse(this.posX + 110, this.posY + 30, 60, 40);
    ellipse(this.posX + 20, this.posY + 30, 60, 40);
  }

  moverNube() {
    this.posX += this.vel;
    // Si llega a los bordes de la pantalla, cambia de dirección
    if (this.posX > width - this.ancho || this.posX < 0) {
      this.vel *= -1;
    }
  }
}
