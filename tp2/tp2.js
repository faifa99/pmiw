let estado = 0;
let insolacion = [];
let textos = [];
let flecha;
let reiniciarIcono;
let contadorFinal=0;

// Variables para la flecha
let flechaX = 710;
let flechaY = 380;
let flechaAncho = 50;
let flechaAlto = 40;

// Variables para animar los botones
let rectXDer = 800;
let textoXDer = 800;
let textoXIzq = -200;
let rectXIzq = -200;
let textoX = 50;

// Variables para los textos de los botones
let textoDer = "";
let textoIzq = "";

// Posición en X fondo del texto
let cajaY = 450;

function preload() {
for (let i = 0; i < 20; i++) {
insolacion[i] = loadImage("data/insolacion" + i + ".png");
}
flecha = loadImage("data/flecha.png");
reiniciarIcono = loadImage("data/reiniciar.png");
}

function setup() {
createCanvas(800, 450); 
textos[0] = "Pedro Alcazar - Salvador Sualgaray";
textos[1] = "El calor sofocante y la humedad extrema no frenan a Mister Jones.\n Obsesionado con desmalezar el terreno, trabaja sin descanso\n mientras sus 5 perros lo observan de fondo.";
textos[2] = "Mister Jones, agobiado por el sol, no ve nada. Pero los perros sí: la Muerte\nse ha materializado con su misma ropa y se acerca. La jauría se eriza\ny ladra desesperada para frenarla.";
textos[3] = "Ignorás a los perros y continuás el trabajo bajo el sol directo.";
textos[4] = "Apartás a los perros y entrás al campo. El calor es insoportable,\nte duele la cabeza con fuerza, pero tu terquedad te gana\ny seguís trabajando.";
textos[5] = "El calor extremo destruye tus fuerzas. Sentís mareos, tienes la visión borrosa y\ntiemblas mientras sacas la cantimplora con caña, dudando entre beber\npara seguir o pedir ayuda.";
textos[6] = "Mister Jones toma de la caña y el esfuerzo bajo el sol aceleran su\ndeshidratación. Su temperatura corporal alcanza un punto crítico y todo\nempieza a darle vueltas.";
textos[7] = "Mister Jones se desvanece y empieza a caer al piso\n,mientras que la Muerte observa de cerca";
textos[8] = "Provocando que la muerte se lleve el alma de Mister Jones y caiga\ndesplomado en el piso, mientras que los perros se sientan alrededor del cuerpo,\nlamentando el tragico hecho.";
textos[9] = "Intentas buscar ayuda mientras que el golpe de calor te nubla la vista\ny te descompone";
textos[10] = "El calor termina descomponiendo a Mister Jones, produciendo que se caiga\ndesplomado en el piso";
textos[11] = "Finalmente Mister Jones termina muriendo, mientras que los 5 perros\ntratan de salvarlo arrastrando el cuerpo hacia la sombra";
textos[12] = "Mister Jones decide quedarse en la sombra y se refugia en el rancho\npor pedido de los perros";
textos[13] = "Luego de estar descansando por un buen rato, la culpa de no estar trabajando\nse echa poco a poco sobre Mister Jones";
textos[14] = "Finalmente Mister Jones mira muy fijamente el campo y a su vez las\nherramientas, sintiendo culpa por perder horas de trabajo y con ganas de volver\nal trabajo";
textos[15] = "Decides reprimir la ansiedad y te quedas bajo techo limpiando\nherramientas y atendiendo a los perros";
textos[16] = "Mister Jones queria volver al trabajo,pero los perros lo alertan\nladrandole y se queda bajo techo ";
textos[17] = "Aguantas la ansiedad, pasan las horas y miras el horizonte\npensando que hubiese pasado si trabajabas bajo el sol\nmientras la muerte se evapora";
textos[18] = "Cae la noche y abrazas a tus perros agradeciendoles\npor haberte alertado por el calor que hubiera pasado";
textos[19] = "La impaciencia vence a Mister Jones y sales a\nrevisar el pozo de agua, cuando te agarra un golpe de calor";
textos[20] = "FIN\n\nCreado por Pedro Alcazar y Salvador Sualgaray\n¡Gracias por jugar!";
}

function draw() {
background(0);
if(estado === 8 || estado === 11 || estado === 18){
contadorFinal++;

if(contadorFinal>300){
estado=20;
contadorFinal=0;
cajaY=height;
textoX=0;
}
}else{
contadorFinal=0;
}

if (estado !== 20 && insolacion[estado]) {
image(insolacion[estado], 0, 0, width, height);
}

cajaY = lerp(cajaY, 275, 0.15);
push();
noStroke();
fill(60, 60, 60, 170);
rect(20, cajaY, 760, 160, 20);
pop();

if (textoX < 50) {
textoX += 5;
}
fill(250);
textSize(18);
text(textos[estado], textoX, cajaY + 35);  

if (estado === 2 || estado === 5 || estado === 14) {
if (textoXDer > 450) {
textoXDer -= 5;
rectXDer -= 5;
}
if (textoXIzq < 50) {
textoXIzq += 5;
rectXIzq += 5;
}
}
  
textSize(14);
if (estado === 2 || estado === 5 || estado === 14) {

// Botón Derecho
fill(40, 40, 40, 215);  
rect(rectXDer, cajaY + 95, 160, 50);  
fill(255);  
text(textoDer, textoXDer, cajaY + 110);    
    
// Botón Izquierdo
fill(40, 40, 40, 215);  
rect(rectXIzq , cajaY + 95, 150, 50);  
fill(255);  
text(textoIzq, textoXIzq, cajaY + 110); 
} 
else if (estado === 20) {
flechaY = 380;  
image(reiniciarIcono, flechaX, flechaY, flechaAncho, flechaAlto);
}
else if (estado !== 8 && estado !== 11 && estado !== 18) {
flechaY = cajaY + 105;  
image(flecha, flechaX, flechaY, flechaAncho, flechaAlto);
}
}

function mousePressed() {
if (estado === 20) {
  // Acá usamos el 380 fijo para que coincida exactamente con la posición del icono en el draw
  if (detectarFlecha(flechaX, 380, flechaAncho, flechaAlto)) {
    estado = 0;
    cajaY = height;
    textoX = 0;
    contadorFinal = 0;
  }
  return;
}

if (estado === 2 || estado === 5 || estado === 14) {
    
// Clic en el botón derecho
if (mouseX > 440 && mouseX < 610 && mouseY > cajaY + 95 && mouseY < cajaY + 145) {
cajaY = height;
textoX = 0;
reiniciarBotones();

if (estado === 2) estado = 3;         
else if (estado === 5) estado = 6;
else if (estado === 14) estado = 19; 
}
// Clic en el botón izquierdo
else if (mouseX > 30 && mouseX < 190 && mouseY > cajaY + 95 && mouseY < cajaY + 145) {
cajaY = height;
textoX = 0;
reiniciarBotones();
      
if (estado === 2) estado = 12;      
else if (estado === 5) estado = 9;
else if (estado === 14) estado = 15; 
}    
}   
// Si es una pantalla normal, usamos la flecha
else if (estado !== 8 && estado !== 11 && estado !== 18) {
if (detectarFlecha(flechaX, flechaY, flechaAncho, flechaAlto)) {
cajaY = height;  

if (estado === 19) {
estado=8;  
textoX = 0;

}else if (estado< 19){
estado++;  
textoX = 0;
}      
if (estado === 2) {
textoDer = "AVANZAR AL CAMPO.";
textoIzq = "IR A LA SOMBRA.";
reiniciarBotones();
} else if (estado === 5) {
textoDer = "TOMAR CAÑA.";
textoIzq = "PEDIR AYUDA.";
reiniciarBotones();
} else if (estado === 14) {
textoDer = "SALES A TRABAJAR\nBAJO EL SOL";
textoIzq = "TE QUEDAS BAJO\nTECHO TRABAJANDO";
reiniciarBotones();
}
}
}
}

function reiniciarBotones() {
textoXDer = 800;
rectXDer = 800;
textoXIzq = -200;
rectXIzq = -200;
}

function detectarFlecha(x, y, ancho, alto) {
return mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto;
}
