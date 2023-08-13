var backgroundImg;
var Hana;
var ninja;
var OldMan;
var Flower;

function preload(){
 backgroundImg=loadImage("background.png")
 Hana=loadImage("Hana.png")
 ninja=loadImage("Ninja.png")
 OldMan=loadImage("Oldman.png")
 Flower=loadImage("SakuraFlower.png")
 
}

function setup(){
  createCanvas(850,600)

//making Hana
Girl=createSprite(50,300,10,10);
Girl.addImage(Hana);
Girl.scale=0.35

//Making the old man
Man=createSprite(800,300,10,10);
Man.addImage(OldMan);
Man.scale=0.37
//Making outside boundarys of the game.

var boundary1 = createSprite(420,30,760,5);
boundary1.shapeColor = "white";

var boundary2 = createSprite(40,120,5,200);
boundary2.shapeColor = "white";

var boundary3 = createSprite(15,220,100,5);
boundary3.shapeColor = "white";

var boundary4 = createSprite(800,120,5,200);
boundary4.shapeColor = "white";

var boundary5 = createSprite(825,220,100,5);
boundary5.shapeColor = "white";

var boundary6 = createSprite(15,350,100,5);
boundary6.shapeColor = "white";

var boundary7 = createSprite(40,440,5,180);
boundary7.shapeColor = "white";

var boundary8 = createSprite(420,525,760,5);
boundary8.shapeColor = "white";

var boundary9 = createSprite(800,440,5,175);
boundary9.shapeColor = "white";

var boundary10 = createSprite(825,350,100,5);
boundary10.shapeColor = "white";

//Inside boundrys
var boundary11 = createSprite(420,450,600,5);
boundary11.shapeColor = "white";

var boundary12 = createSprite(205,365,5,160);
boundary12.shapeColor = "white";

var boundary13 = createSprite(300,487,5,80);
boundary13.shapeColor = "white";

var boundary14 = createSprite(390,370,180,5);
boundary14.shapeColor = "white";

var boundary15 = createSprite(477,370,5,157);
boundary15.shapeColor = "white";

var boundary16 = createSprite(392,290,170,5);
boundary16.shapeColor = "white";

var boundary17 = createSprite(640,290,160,5);
boundary17.shapeColor = "white";

var boundary16 = createSprite(560,370,170,5);
boundary16.shapeColor = "white";

var boundary19 = createSprite(720,410,5,80);
boundary19.shapeColor = "white";

var boundary20 = createSprite(500,210,170,5);
boundary20.shapeColor = "white";

var boundary21 = createSprite(420,250,5,80);
boundary21.shapeColor = "white";

var boundary22 = createSprite(210,110,170,5);
boundary22.shapeColor = "white";

var boundary20 = createSprite(293,162,5,100);
boundary20.shapeColor = "white";






 
}

function draw(){
  background(backgroundImg)
 
  
drawSprites()
}
