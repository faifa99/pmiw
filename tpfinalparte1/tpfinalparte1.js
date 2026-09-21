let estado = 1; 

let lainsolacion1;
let lainsolacion2;
let lainsolacion3;

function preload() {
lainsolacion1 = loadImage("data/insolacion1.png"); 
lainsolacion2 = loadImage("data/insolacion2.png");
lainsolacion3 = loadImage("data/insolacion3.png");
}
function setup() {
createCanvas(800, 450);
}
function draw() {
background(0);
if (estado === 1) {
image(lainsolacion1, 0, 0, width, height);
} else if (estado === 2) {
image(lainsolacion2, 0, 0, width, height);
} else if (estado === 3) {
image(lainsolacion3, 0, 0, width, height);
}
}

function mousePressed() {
if (estado < 3) {
estado++;
}
}
