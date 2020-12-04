let bola = document.getElementById("bola");
function moverBola(evento) {
    let posX = bola.x;
    let posY = bola.y;
    let vel = 5;
    if (evento.key == "ArrowUp") {
        bola.style.top = posY - vel + "px";
    }
    else if (evento.key == "ArrowDown") {
        bola.style.top = posY + vel + "px";
    }
    else if (evento.key == "ArrowLeft") {
        bola.style.left = posX - vel + "px";
    }
    else if (evento.key == "ArrowRight") {
        bola.style.left = posX + vel + "px";
    }
}