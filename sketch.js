var tom,tom1Img,tom2Img,jerry,jerryImg,jerry2Img;
var ground, groundImg

function preload() {
    //load the images here
    tom2Img= loadAnimation("cat2.png","cat3.png")
    jerry2Img= loadAnimation("jerry3.png","jerry2.png")
    tom1Img= loadImage("cat1.png")
    jerry1Img= loadImage("mouse1.png")

    groundImg= loadImage("gardenpng")
}

function setup(){ 
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom= createSprite(400,200,20,20)
tom.addImage("tom sitting",tom1Img)
jerry= createSprite(400,500,20,20)
jerry.addAnimation("jerry teasing",jerry2Img)

ground= createSprite(500,800,50,50)
ground.addImage("garden",groundImg)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
   tom.x = World.mouseX;

   if (tom.x - jerry.x < jerry.width/2 + tom.width/2
    && jerry.x -tom.x < jerry.width/2 + tom.width/2
    && tom.y - jerry.y < jerry.height/2 + tom.height/2
    && jerry.y - tom.y < jerry.height/2 + tom.height/2) 
    {
        keyPressed();
}


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(tom.x > 200) 
{
    tom.changeAnimation("tom running", tom2Img)

    jerry.addAnimation("jerry with cheese",jerry1Img)
}
}
