let estado = 0;
let insolacion = [];
let textos = [];

//Variables para animar los botones
let rectXDer = 800;
let textoXDer = 800;
let textoXIzq = -200;
let rectXIzq = -200;
let textoX = 50;

function preload(){
for(let i = 0; i < 19; i++){
insolacion[i] = loadImage("data/insolacion" + i + ".png");
}
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
}

function draw() {
background(0);
if (insolacion[estado]) {
image(insolacion[estado], 0, 0, width, height);
}
//Animación que ubica mejor el texto
if (textoX < 50) {
textoX += 5;
}
fill(250);
textSize(18);
text(textos[estado], textoX, 45);  

if (estado === 2 || estado === 6 || estado === 14) {
if (textoXDer > 450) {
textoXDer -= 5;
rectXDer -= 5;
}
if (textoXIzq < 50) {
textoXIzq += 5;
rectXIzq += 5;
}
textSize(14);
// Botón Derecho
fill(146, 182, 111);  
rect(rectXDer - 10, 75, 160, 50);  
fill(0);  
text(textoDer, textoXDer, height / 5);  
    
// Botón Izquierdo
fill(146, 182, 111);  
rect(rectXIzq - 10, 75, 150, 50);  
fill(0);  
text(textoIzq, textoXIzq, height / 5);  
}
}

function mousePressed() {
if (estado < 19) {
estado++; // suma estados
textoX = 0; // vuelve el texto
if (estado === 2) {
textoDer = "AVANZAR AL CAMPO.";
textoIzq = "IR A LA SOMBRA.";
reiniciarBotones();
} else if (estado === 6) {
textoDer = "TOMAR CAÑA.";
textoIzq = "PEDIR AYUDA.";
reiniciarBotones();
} else if (estado === 14) {
textoDer = "TE QUEDAS BAJO\nTECHO TRABAJANDO";
textoIzq = "SALES A TRABAJAR\nBAJO EL SOL";
reiniciarBotones();
}
} else {
estado = 0;  // nos dice que si pasamos las fotos, volvemos a la primera
}
}

function reiniciarBotones() {
textoXDer = 800;
rectXDer = 800;
textoXIzq = -200;
rectXIzq = -200;
}
