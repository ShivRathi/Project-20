var tom;
var garden;



function preload() {
    //load the images here
    gardenImg=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 //  tom=createSprite(200,200,20,20);
   garden=createSprite(200,200,20,20);
   garden.addImg(gardenImg);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
