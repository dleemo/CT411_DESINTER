function setup() {
    createCanvas(1024, 768);
}
function draw() {
   face (200,200,300);


}

function face (x,y,size){
     fill(0)
    rect(150, 100, 297, 250, 20);  
    noStroke();
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
    
    
}