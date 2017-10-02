var circX;
var circY;
var circDiameter = 60;
var circRadius = circDiameter/2;
var d;
var redCol = 255;
var indieFont;

function preload(){
    indieFont = loadFont("IndieFlower.ttf");
}

function setup(){
    createCanvas(windowWidth, windowHeight); 
    circX = 400;
    circY = 400;
    textFont(indieFont);
    textSize(40);
}

function draw(){
    background(redCol, 178, 100);
    fill(280);
    noStroke();
    ellipse(circX, circY, circDiameter, circDiameter);
     d = dist(circX, circY, mouseX, mouseY);
    fill(0);
    ellipse(280, 275, 40, 40);
    ellipse(500, 275, 40, 40);
   
arc(390, 500, 200, 200, TWO_PI, PI);
    arc(280, 205, 80, 40, PI, TWO_PI);
     arc(500, 205, 80, 40, PI, TWO_PI);

text("What the What?", mouseX, mouseY, 210, 680)
    

}

function mousePressed(){
    if(d < circRadius){
        redCol = 200;
    }else{
        redCol = 255;
    }
    
    
}