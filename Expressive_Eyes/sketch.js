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
        background(20,200,10);
        fill(0)
                ellipse(400, 200, 140, 140);
                ellipse(600, 220, 120, 120);
        fill(random(190), 50,random(180));
                ellipse(600, 240, 50, 50);
                ellipse(400, 240, 50, 50);
         strokeWeight(10)
        line(300, 420, 700, 400);
    }
}

function mousePressed(){
    issaLook = !issaLook;
    
    
}