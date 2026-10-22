class Ambiente {

  constructor() {
    this.sueloY = 380;
  }

  dibujarAmbiente() {
    // cielo
    background(249, 206, 134);

    // sol
    noStroke();
    fill(252, 227, 168);
    ellipse(width - 90, 90, 130);
    fill(255, 244, 207);
    ellipse(width - 90, 90, 80);

    // suelo
    fill(181, 121, 59);
    rect(0, this.sueloY, width, height - this.sueloY);
  }
}
