var screen = document.querySelector('canvas');
var pointer = screen.getContext('2d');

var pointerDim = 10;

function draw(){
    let offset = screen.getBoundingClientRect();
    let e = window.event;
    let posX = e.clientX - offset.x -pointerDim/2;
    let posY = e.clientY - offset.y -pointerDim/2;
    pointer.fillStyle='white';
    pointer.fillRect(posX, posY, pointerDim, pointerDim);
    console.log(posX+', '+posY);
    console.log(e.clientX+', '+e.clientY);
    console.log(offset.x, offset.y);
}

screen.onclick = draw;