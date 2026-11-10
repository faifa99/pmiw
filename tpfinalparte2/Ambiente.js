class Ambiente {
  constructor(imagenes, click, musica) {
    this.imagenes = imagenes;
    this.click = click;
    this.musica = musica;
    this.pisoY = 380;
    this.estado = "inicio"; // inicio, instrucciones, jugando, perdiste, ganaste, creditos
    this.tiempoFinal = 0;   // momento en que ganaste o perdiste
    this.creditosAlfa = 0;  // para el fundido de los créditos copiado del anterior tp

    // botón (sirve para JUGAR y para SIGUIENTE)
    this.botonAncho = 220;
    this.botonAlto = 50;
    this.botonX = width / 2 - this.botonAncho / 2;
    this.botonY = 360;

    this.crearObjetos();
  }

  crearObjetos() {
    this.jones = new Jones();
    this.barra = new BarraCalor();
    this.nube = new Nube();
    this.reloj = new Reloj();
  }

  empezarJuego() {
    this.crearObjetos(); // reinicia todo, incluido el reloj
    this.estado = "jugando";
  }

  // ---------- se llama en cada frame ----------
  actualizar() {
    if (this.estado === "inicio") {
      this.pantallaInicio();
    } else if (this.estado === "instrucciones") {
      this.pantallaInstrucciones();
    } else if (this.estado === "jugando") {
      this.jugar();
    } else if (this.estado === "perdiste") {
      this.pantallaFinal("PERDISTE", color(150, 0, 0));
      this.pasarACreditos();
    } else if (this.estado === "ganaste") {
      this.pantallaFinal("GANASTE", color(0, 150, 0));
      this.pasarACreditos();
    } else if (this.estado === "creditos") {
      this.pantallaCreditos();
    }
  }

  // ---------- pantallas ----------
  pantallaInicio() {
    image(this.imagenes[0], 0, 0, width, height);
    this.dibujarBoton("JUGAR");
  }

  pantallaInstrucciones() {
    image(this.imagenes[1], 0, 0, width, height);
    this.dibujarBoton("SIGUIENTE");
  }

   jugar() {
    if (!this.musica.isPlaying()) {
      this.musica.play();
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
      this.tiempoFinal = millis();
    } else if (this.reloj.llegoAlFinal()) {
      this.estado = "ganaste";
      this.tiempoFinal = millis();
    }
  }

  pantallaFinal(mensaje, colorFondo) {
    background(colorFondo);
    push();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(50);
    text(mensaje, width / 2, height / 2);
    pop();
  }

  pasarACreditos() {
    // a los 5 segundos pasa a los créditos
    if (millis() - this.tiempoFinal > 5000) {
      this.estado = "creditos";
      this.creditosAlfa = 0;
    }
  }

  pantallaCreditos() {
    background(0);
    if (this.creditosAlfa < 255) {
      this.creditosAlfa += 4; // fundido de entrada
    }
    push();
    fill(250, this.creditosAlfa);
    textAlign(CENTER, CENTER);
    textSize(18);
    text("Basado en: La insolación - Horacio Quiroga", width / 2, 130);
    text("Integrantes: Salvador Sualgaray - Pedro Alcazar", width / 2, 180);
    text("Gracias por jugar", width / 2, 230);
    text("Tocá R para volver al inicio", width / 2, 260);
    pop();
  }

  // ---------- partes que se reusan ----------
  dibujarAmbiente() {
    background(135, 200, 235);
    push();
    noStroke();
    fill(255, 210, 60);
    ellipse(560, 70, 70);
    fill(222, 184, 110);
    rect(0, this.pisoY, width, height - this.pisoY);
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

  dibujarBoton(texto) {
    push();
    fill(40);
    stroke(255);
    rect(this.botonX, this.botonY, this.botonAncho, this.botonAlto, 10);
    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(texto, width / 2, this.botonY + this.botonAlto / 2);
    pop();
  }

  mouseSobreBoton() {
    return mouseX > this.botonX && mouseX < this.botonX + this.botonAncho &&
           mouseY > this.botonY && mouseY < this.botonY + this.botonAlto;
  }

   // se llama desde mousePressed()
 clic() {
    if (this.mouseSobreBoton()) {
      this.click.play();
      if (this.estado === "inicio") {
        this.estado = "instrucciones";
        this.botonY = 420; // SIGUIENTE más abajo
      } else if (this.estado === "instrucciones") {
        this.empezarJuego();
      }
    }
  }

  // se llama desde keyPressed()
  tecla() {
    if (this.estado === "creditos" && (key === 'r' || key === 'R')) {
      this.estado = "inicio"; // vuelve a la pantalla de la imagen
      this.botonY = 360;      // JUGAR vuelve a su lugar
    }
  }
}
