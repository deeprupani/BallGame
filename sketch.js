var canvas;
var music;
var Sprite1, Sprite2, Sprite3, Sprite4;
var boxSprite;
var ES1, ES2, ES3, ES4;

function preload() {
    music = loadSound("music.mp3");
    // music.play();
}


function setup() {
    canvas = createCanvas(800, 600);

    //create 4 different surfaces
    Sprite1 = createSprite(100, 550, 100, 10);
    Sprite1.shapeColor = "green";

    Sprite2 = createSprite(250, 550, 100, 10);
    Sprite2.shapeColor = "blue";

    Sprite3 = createSprite(400, 550, 100, 10);
    Sprite3.shapeColor = "yellow";

    Sprite4 = createSprite(550, 550, 100, 10);
    Sprite4.shapeColor = "orange";


    boxSprite = createSprite(random(20, 750));
    boxSprite.shapeColor = "white";
    boxSprite.velocityY = 5;
    boxSprite.velocityX = -5;

    ES1 = createSprite(600, 599, 1600, 10);
    ES1.visible = false;;

    ES2 = createSprite(10, 0, 1600, 10);
    ES2.visible = false;

    ES3 = createSprite(0, 10, 10, 1600);
    ES3.visible = false;

    ES4 = createSprite(799, 10, 10, 1600);
    ES4.visible = false;
}

function draw() {
    background(rgb(169, 169, 169));
    //create edgeSprite

    if (boxSprite.isTouching(ES1)) {
        boxSprite.velocityY = -5
    }

    if (boxSprite.isTouching(ES2)) {
        boxSprite.velocityY = 5;
    }

    if (boxSprite.isTouching(ES3)) {
        boxSprite.velocityX = 5;
    }

    if (boxSprite.isTouching(ES4)) {
        boxSprite.velocityX = -5;
    }

    drawSprites();
    //add condition to check if box touching surface and make it box

    if (Sprite1.isTouching(boxSprite) && boxSprite.bounceOff(Sprite1)) {
        boxSprite.shapeColor = "green";
        music.play();
    }

    if (Sprite2.isTouching(boxSprite) && boxSprite.bounceOff(Sprite2)) {
        boxSprite.shapeColor = rgb(255,128,0);
        boxSprite.velocityX=0;
        boxSprite.velocityY=0;
        music.stop();
    }

    if (Sprite3.isTouching(boxSprite) && boxSprite.bounceOff(Sprite3)) {
        boxSprite.shapeColor = "orange";
        music.play();
    }

    if (Sprite4.isTouching(boxSprite) && boxSprite.bounceOff(Sprite4)) {
        boxSprite.shapeColor = "orange";
        music.play();
    }
}
