var index = [];
var emojis = [];
var 

function preload(){
   emojis[0] = loadImage('cool_emoji.png');
   emojis[1] = loadImage('poop_emoji.png');
   emojis[2] = loadImage('thinking_emoji.png');
   emojis[3] = loadImage('tears_emoji.png');
    
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    }

function mousePressed(){
    var r = random(0, emojis.length);
    var b = new index(mouseX, mouseY, emojis);
    index.push(b);
    
}

function draw(){
    background(255);
    for (var i = index.length - 1; i >= 0; i--) {
        index[i].update();
        index[i].display();
        
    }
}