var clickCounter = 0;

function cmdLine(){
    if(clickCounter == 0){
        ctx.beginPath();
        ctx.moveTo(50,50);
    }
    if(clickCounter == 1){
        ctx.lineTo(200, 50);
        ctx.stroke();
        clickCounter = 0;
    }
}
function cmdPolyline(){
    return;
}
function cmdArc(){
    return;
}

var commands = [
    {'command':['line', 'l'], 'function':'cmdLine()', 'text':''},
    {'command':['polyline', 'pl'], 'function':'cmdPolyline()', 'text':''},
    {'command':['arc', 'a'], 'function':'cmdArc()', 'text':''}
]