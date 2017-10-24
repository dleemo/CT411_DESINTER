var img1 = {
    loc: 0,
    size: 280,
    x: 200,
    y: 100,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0

};

var img2 = {
    loc: 0,
    size: 280,
    x: 479,
    y: 100,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0

};
var img3 = {
    loc: 0,
    size: 280,
    x: 759,
    y: 100,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0

};
var img4 = {
    loc: 0,
    size: 280,
    x: 200,
    y: 380,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0

};
var img5 = {
    loc: 0,
    size: 280,
    x: 479,
    y: 380,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0

};
var img6 = {
    loc: 0,
    size: 280,
    x: 759,
    y: 380,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0

};
var babyBye;
var babyCry;
var babyFart;
var babyGibberish;
var babyLaugh;
var babySneeze;


var col = 200;

function preload(){
    img1.loc = loadImage("Baby_bye.jpg");
    babyBye = loadSound("Baby_bye.mp3");
    img2.loc = loadImage("Baby_cry.jpg");
    babyCry = loadSound("Baby_cry.mp3");
    img3.loc = loadImage("Baby_fart.jpg");
    babyFart = loadSound("Baby_fart.mp3");
    img4.loc = loadImage("Baby_gibberish.jpg");
    babyGibberish = loadSound("Baby_gibberish.mp3");
    img5.loc = loadImage("Baby_laugh.jpg");
    babyLaugh = loadSound("Baby_laugh.mp3");
    img6.loc = loadImage("Baby_sneeze.jpg");
    babySneeze = loadSound("Baby_sneeze.mp3");
}

function setup(){
    createCanvas(windowWidth,windowHeight);

}

function draw(){
    background(col);
    //    BABYBYE
    image(img1.loc, img1.x, img1.y, img1.size, img1.size);
    //    BABYCRY
    image(img2.loc, img2.x, img2.y, img2.size, img2.size);
    //    BABYFART
    image(img3.loc, img3.x, img3.y, img3.size, img3.size);
    //    BABYGIBBERISH
    image(img4.loc, img4.x, img4.y, img4.size, img4.size);
    //    BABYLAUGH
    image(img5.loc, img5.x, img5.y, img5.size, img5.size);
    //    BABYSNEEZE
    image(img6.loc, img6.x, img6.y, img6.size, img6.size);

    
}

function mousePressed(){0
//    BABYBYE
    img1.top = img1.y;
    img1.left = img1.x;
    img1.right = img1.x + img1.size;
    img1.bottom = img1.y + img1.size
//    BABYCRY                    
    img2.top = img2.y;
    img2.left = img2.x;
    img2.right = img2.x + img2.size;
    img2.bottom = img2.y + img2.size
//    BABYFART                    
    img3.top = img3.y;
    img3.left = img3.x;
    img3.right = img3.x + img3.size;
    img3.bottom = img3.y + img3.size
//    BABYGIBBERISH                    
    img4.top = img4.y;
    img4.left = img4.x;
    img4.right = img4.x + img4.size;
    img4.bottom = img4.y + img4.size;
//    BABYLAUGH                    
    img5.top = img5.y;
    img5.left = img5.x;
    img5.right = img5.x + img5.size;
    img5.bottom = img5.y + img5.size
//    BABYSNEEZE                   
    img6.top = img6.y;
    img6.left = img6.x;
    img6.right = img6.x + img6.size;
    img6.bottom = img6.y + img6.size
                        
    if (mouseX > img1.left && mouseX < img1.right && mouseY > img1.top && mouseY < img1.bottom){
        col = 255; babyBye.play();
    }
    if (mouseX > img2.left && mouseX < img2.right && mouseY > img2.top && mouseY < img2.bottom){
        col = 255; babyCry.play();
    }
    if (mouseX > img3.left && mouseX < img3.right && mouseY > img3.top && mouseY < img3.bottom){
        col = 255; babyFart.play();
    }
    if (mouseX > img4.left && mouseX < img4.right && mouseY > img4.top && mouseY < img4.bottom){
        col = 255; babyGibberish.play();
    }
    if (mouseX > img5.left && mouseX < img5.right && mouseY > img5.top && mouseY < img5.bottom){
        col = 255; babyLaugh.play();
    }
        if (mouseX > img6.left && mouseX < img6.right && mouseY > img6.top && mouseY < img6.bottom){
        col = 255; babySneeze.play();
    }
}
    