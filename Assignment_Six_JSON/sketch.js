var rec = {
    x: 100,
    y: 100,
    size: 100,
    
    
};
var colR;

function setup(){
    createCanvas(windowWidth, windowHeight);
    var rectTop = rect.y;
    var rectBottom = rect.y + rect.size;
    var rectLeft = rect.x;
    var rectRight = rect.x + rect.size;
    
}

function draw(){
    background(200);
        //How would you translate the variables below to pull values out of JSON above (in lines 23-31)?
    if(mouseX > rect.x && mouseX < rect.x+rect.size && mouseY > rect.y && mouseY < rect.y+rect.size){

        colR = 0;   
    }else{
        colR = 255;   
    }
        fill(colR, 10, 100);
        rect(rect.x, rect.y, rect.size, rect.size);
    
    
    
    
}