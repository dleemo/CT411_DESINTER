function setup() {
    createCanvas(1400, 1400);
}
function draw() {
 background(300);
    strokeWeight(2);
    stroke(200);
    
for (var el = 0; el <= width; el += 50) {
    for (var la = 0; la <= height; la += 50) {
    fill(random(120), 200, random(180));
    ellipse(el, la, 75, 30, 40);
    

    }
}
    
}