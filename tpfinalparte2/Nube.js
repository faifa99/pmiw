class Nube {
  constructor() {
    this.posX = 0;
    this.posY = 80;
    this.ancho = 160;
    this.alto = 60;
    this.vel = 1.5;
    this.direccion = 1; 
  }

  moverNube() {
    this.posX += this.vel * this.direccion;
    // rebota en los bordes
    if (this.posX + this.ancho > width || this.posX < 0) {
      this.direccion *= -1;
    }
  }

  dibujarNube() {
    push();
    noStroke();
    // sombra en el piso
    fill(0, 0, 0, 60);
    ellipse(this.posX + this.ancho / 2, 385, this.ancho, 20);
    // nube
    fill(255);
    ellipse(this.posX + 40, this.posY + 30, 70, 50);
    ellipse(this.posX + 80, this.posY + 20, 80, 60);
    ellipse(this.posX + 120, this.posY + 30, 70, 50);
    rect(this.posX + 40, this.posY + 30, 80, 25);
    pop();
  }

  // devuelve true si Jones está debajo de la nube (en la sombra)
  detectarJones(j) {
    let centroJones = j.posX + j.ancho / 2;
    return centroJones > this.posX && centroJones < this.posX + this.ancho;
  }
}
