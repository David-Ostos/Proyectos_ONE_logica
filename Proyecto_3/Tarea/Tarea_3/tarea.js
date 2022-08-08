var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

function dibujarCirculo(x, y, radio, color) {

    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2*3.14);
    pincel.fill();
}

function dibujarFlor(x,y){

    dibujarCirculo(x,y, 20, "red")
    dibujarCirculo(x+40,y, 20, "black")
    dibujarCirculo(x,y-40, 20, "yellow")
    dibujarCirculo(x,y+40, 20, "blue")
    dibujarCirculo(x-40,y, 20, "orange")

}

dibujarFlor(300,200);
dibujarFlor(100,200);
dibujarFlor(500,200);
