let imagen = document.querySelector('#imagen');
//let imagen = document.getElementById('imagen');
console.log("posX" + imagen.x);
imagen.addEventListener('click', moverImagen);


function moverImagen() {
    let posX = imagen.x + 5;
    let posY = imagen.y + 5;
    imagen.style.left = posX + "px";
    imagen.style.top = posY + "px";
    if (imagen.x > document.documentElement.clientWidth) {
        imagen.style.left = "375px";
    }
    if (imagen.y > document.documentElement.clientHeight) {
        imagen.style.top = "125px";
    }
    console.log("top" + imagen.y);
    console.log("left" + imagen.x);
}