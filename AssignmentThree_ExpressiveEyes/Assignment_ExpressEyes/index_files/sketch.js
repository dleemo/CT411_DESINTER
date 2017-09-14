var issaLook = false;

function setup (){
    createCanvas(windowWidth, windowHeight);
}


function draw(){
    if(issaLook == false){;
    background(0);
        fill(0)
        ellipse(400,200, 140, 140);
        ellipse(600, 200, 140, 140);
        
    }else{
        background(25,110,120);
        fill(0)
                ellipse(400, 200, 140, 140);
                ellipse(600, 200, 140, 140);
        fill(random(190), 50,random(180));
                ellipse(600, 240, 50, 50);
                ellipse(400, 240, 50, 50);
    }
}

function mousePressed(){
    issaLook = !issaLook;
    
    
}