var rectX = 150;
var rectY = 100;
var rectSize = 297;
var rectTop = rectY;
var rectBottom = rectY + rectSize;
var rectLeft = rectX;
var rectRight = rectX + rectSize;
var haiR;


function setup() {
    createCanvas(1024, 768);
}
function draw() {
    background(30, 145, 203)  
       noStroke();
    fill(haiR, haiR, haiR);
    rect(rectX, rectY, 297, 250, 20);
        strokeWeight(10);
    fill(136, 09, 07);
    ellipse(299,266,266, 290);
    fill(224,167,245)
    ellipse(258,228,75,71)
    fill(224,167,245)
    ellipse(350,228,55,52)
    noFill();
stroke(0);
curve(100, 150, 300, 275, 300, 350, 15, 380);
    
     if(mouseX > rectLeft && mouseX < rectRight && mouseY > rectTop && mouseY < rectBottom){
        haiR = 0;   
    }else{
        haiR = 200;   
    }

}