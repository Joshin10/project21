var canvas;
var music;
var rect1,rect2,rect3,rect4;
var square;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
rect1=createSprite(700,500,100,180);
rect1.shapeColor="red"
rect2=createSprite(500,500,100,180);
rect2.shapeColor="orange"
rect3=createSprite(300,500,100,180);
rect3.shapeColor="blue"
rect4=createSprite(100,500,100,180);
rect4.shapeColor="green"

    //create box sprite and give velocity
square=createSprite(random(800,300));
square.velocityY=2;
square.velocityX=-2;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges =createEdgeSprites();
    square.bounceOff(edges);


    //add condition to check if box touching surface and make it box
    if(rect1.isTouching(square)&&square.bounceOff(rect1)){
        square.shapeColor="red"
        music.play();
    }
    if(rect2.isTouching(square)&&square.bounceOff(rect2)){
        square.shapeColor="orange"
        music.play();
    }
    if(rect3.isTouching(square)&&square.bounceOff(rect3)){
        square.shapeColor="blue"
        music.play();
    }
    if(rect4.isTouching(square)&&square.bounceOff(rect4)){
        square.shapeColor="green"
        music.play();
    }

    drawSprites();
    //square.bounceOff(edges);


}
