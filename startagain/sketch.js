var counter = 0;
var counHer = 0;
var speed = 1;
var speed2 = 5;
var heart;
var cupid;
var babychild;

function preload(){
    heart = loadImage("heart.png");
    cupid = loadImage("cupid_other.png");
     baby = loadImage("cupid_child.png");
    
}

function setup(){
    createCanvas(windowWidth,windowHeight);
//    rectMode(CENTER);
    
    
}

function draw(){
   background(250);
    
    push();
        translate(300, 300);
        scale(2);
        image(heart, 0, 0, 50, 50)
    pop();
    push();
        translate(150, 250)
        scale(.5);
    imageMode(CENTER)
         rotate(radians(counter));
        image(cupid, 50, 20, 407, 243);
    pop();
     push();
        translate(500, 500)
        scale(.5);
    imageMode(CENTER)
         rotate(radians(counHer));
        image(baby, 50, 20, 300, 300);
     pop();
    counter+= speed;
    counHer-= speed;
    
 
    
  
}

