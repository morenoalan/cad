var screen = document.querySelector('canvas');
var pointer = screen.getContext('2d');

var pointerDim = 10;

function draw(){
    let offset = screen.getBoundingClientRect();
    let e = window.event;
    let posX = e.clientX - offset.left.toFixed() -pointerDim/2;
    let posY = e.clientY - offset.top.toFixed() -pointerDim/2;
    pointer.fillStyle='white';
    pointer.fillRect(posX, posY, pointerDim, pointerDim);
    console.log(posX+', '+posY);
    console.log(e.clientX+', '+e.clientY);
    console.log(offset.x, offset.y);
}

function coordinates(e){
    let offset = screen.getBoundingClientRect();
    let x = e.clientX - offset.left.toFixed();
    let y = e.clientY - offset.top.toFixed();
    let coor = x + ', ' + y;
    document.getElementById('coordinates').innerHTML = coor;

}

function clearCoordinates() {
    document.getElementById('coordinates').innerHTML = 'x, y';
}

screen.onclick = draw;
screen.onmousemove = coordinates;
screen.onmouseout = clearCoordinates;