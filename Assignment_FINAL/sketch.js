var stars = [];
var galaxy = [];
var img1 = {
    loc: 0,
    x: 0,
    y: 0,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};
var starSound
function preload(){
   starSound = loadSound("shooting_star.mp3");
   img1.loc = loadImage("galaxy.jpg");
   stars[0] = loadImage("star0.png");
   stars[1] = loadImage("star1.png");
   stars[2] = loadImage("star2.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
//    stars[0] = new Shiny();
//    stars[1] = new Shiny();

}

function mousePressed(){
var r = floor(random(0, stars.length));
var b = new Shiny(mouseX, mouseY, stars[r]);
galaxy.push(b);
}

function draw(){
    background(0);
    image(img1.loc, img1.x, img1.y, img1.size, img1.size);
    for (var i = galaxy.length - 1; i >=0; i--) {
        galaxy[i].Shiningstar();
        
    }
//    stars[0].Shiningstar();
//    stars[1].Shiningstar();  
}

//CONSTRUCTOR FUNCTION
function Shiny(x,y, img){
    this.x = x;
    this.y = y;
    this.img = img;
    this.size = 20
    this.Shiningstar = function (){
        imageMode(CENTER);
        image(this.img, this.x, this.y, 100, 100);
//        fill(223,10, 20);
//        ellipse(this.x, this.y, this.size, this.size);
    }
    
        
    
    
}