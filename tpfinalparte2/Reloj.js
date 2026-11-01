class Reloj {
  constructor() {
    this.posX = width / 2;   // centro horizontal
    this.posY = height - 30; // parte inferior
    this.ancho = 100;
    this.alto = 40;
    this.tiempoMax = 25;     // segundos para ganar
  }
  dibujarReloj() {
    let segundos = min(floor(millis() / 1000), this.tiempoMax);

    push();
    // marco del reloj
    rectMode(CENTER);
    stroke(255);
    fill(20);
    rect(this.posX, this.posY, this.ancho, this.alto);

    // numeros estilo reloj digital: 00:07
    noStroke();
    fill(255);
    textFont("monospace");
    textSize(28);
    textAlign(CENTER, CENTER);
    text("00:" + nf(segundos, 2), this.posX, this.posY);
    pop();
  }
  llegoAlFinal() {
    return millis() / 1000 >= this.tiempoMax;
  }
}
