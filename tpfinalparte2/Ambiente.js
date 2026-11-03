class Ambiente {
  constructor() {
    this.pisoY = 380;
    // objetos secundarios
    this.jones = new Jones();
    this.barra = new BarraCalor();
    this.nube = new Nube();
    this.reloj = new Reloj();
    this.estado = "jugando"; // "jugando", "perdiste" o "ganaste"
  }

  dibujarAmbiente() {
    // cielo 
    background(135, 200, 235);
    push();
    noStroke();
    // sol
    fill(255, 210, 60);
    ellipse(560, 70, 70);
    // piso de arena
    fill(222, 184, 110);
    rect(0, this.pisoY, width, height - this.pisoY);
    pop();
  }

  // todo lo que pasa en cada frame
  actualizar() {
    if (this.estado === "perdiste") {
      this.pantallaFinal("PERDISTE", color(150, 0, 0));
      return;
    }
    if (this.estado === "ganaste") {
      this.pantallaFinal("GANASTE", color(0, 150, 0));
      return;
    }

    this.dibujarAmbiente();

    this.nube.moverNube();
    this.nube.dibujarNube();

    this.jones.moverMisterJones();
    this.jones.dibujarMisterJones();

    let estaEnSombra = this.nube.detectarJones(this.jones);
    this.barra.dibujarBarra(estaEnSombra);

    this.reloj.dibujarReloj();
    this.dibujarInstrucciones();

    if (this.barra.valor >= 100) {
      this.estado = "perdiste";
    } else if (this.reloj.llegoAlFinal()) {
      this.estado = "ganaste";
    }
  }

  pantallaFinal(mensaje, colorFondo) {
    background(colorFondo);
    push();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(50);
    text(mensaje, width / 2, height / 2);
    textSize(18);
    text("Apretá R o ESPACIO para reiniciar", width / 2, height / 2 + 50);
    pop();
  }
  dibujarInstrucciones() {
    let segundos = (millis() - this.reloj.inicio) / 1000;
    if (segundos < 4) {
      push();
      fill(60, 40, 10);
      noStroke();
      textAlign(CENTER, CENTER);
      textSize(18);
      text("Te movés con las flechas ← →", width / 2, 405);
      pop();
    }
  }
  reiniciar() {
    this.jones = new Jones();
    this.barra = new BarraCalor();
    this.nube = new Nube();
    this.reloj = new Reloj();
    this.estado = "jugando";
  }
}
