class BarraCalor {
  constructor() {
    this.posX = 20;
    this.posY = 20;
    this.ancho = 200;
    this.alto = 16;
    this.valor = 0;
  }
  dibujarBarra(detectado) {
    // sube solo cuando la nube NO tapa a Jones
    if (!detectado) {
      this.valor = min(this.valor + 0.15, 100);
    }
    push();
    // marco
    stroke(255);
    fill(40, 25, 9);
    rect(this.posX, this.posY, this.ancho, this.alto);
    // relleno
    noStroke();
    fill(226, 75, 74);
    rect(this.posX, this.posY, this.valor * 2, this.alto);
    pop();
  }
} 

class Reloj {
  constructor() {
    this.posX = width / 2;    // centro horizontal
    this.posY = height - 30;  // parte inferior
    this.ancho = 100;
    this.alto = 40;
    this.tiempoMax = 25;      // segundos para ganar
    this.inicio = millis();   // momento en que arranca el reloj
  }

  dibujarReloj() {
    let tiempoTranscurrido = (millis() - this.inicio) / 1000;
    let segundos = min(floor(tiempoTranscurrido), this.tiempoMax);

    push();
    // marco del reloj
    rectMode(CENTER);
    stroke(255);
    fill(20);
    rect(this.posX, this.posY, this.ancho, this.alto);

    // numeros 
    noStroke();
    fill(255);
    textSize(28);
    textAlign(CENTER, CENTER);
  let textoSegundos = segundos;
    if (segundos < 10) {
      textoSegundos = "0" + segundos;
    }
    text("00:" + textoSegundos, this.posX, this.posY);
    pop();
  }

  llegoAlFinal() {
    let tiempoTranscurrido = (millis() - this.inicio) / 1000;
    return tiempoTranscurrido >= this.tiempoMax;
  }
}
