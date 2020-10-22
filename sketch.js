
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var bow,arrow,green_balloon;
var redB,blueB,pinkB,greenB,arrowGroup;

var score=0;

function preload(){
 //load your images here 
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  redB= new Group();  
  blueB=new Group();
  pinkB=new Group();
  greenB=new Group();
 arrowGroup= new Group();
}

function draw() {

   background.velocityX = -3 ;
  
   if (background.x < 0){
      background.x = background.width/2;
    }
  
   bow.y=World.mouseY;
  
  // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //created new variable tp select the bal and generated random numbers!!
  var select_balloon = Math.round(random(1,4));

  //if else loop is used when we have multiple coditions 
  //framecound taken as 80
  //for every 80 frames we want different balloons
  if (World.frameCount % 80 == 0) {
    //if the random number generated is 1
    if (select_balloon == 1) {
      //then generate red ballon
      //the instructions in the function redBalloon is executed!!!
      redBalloon();
    } else if (select_balloon == 2) {
      //the instructions in the function greenBalloon is executed!!!
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  if (arrowGroup.isTouching(redB)) {
  redB.destroyEach();
  arrowGroup.destroyEach();
    score=score+1;
}
   if (arrowGroup.isTouching(pinkB)) {
  pinkB.destroyEach();
  arrowGroup.destroyEach();
    score=score+1;
}
  if (arrowGroup.isTouching(blueB)) {
  blueB.destroyEach();
  arrowGroup.destroyEach();
    score=score+1;
  }
  if (arrowGroup.isTouching(greenB)) {
  greenB.destroyEach();
  arrowGroup.destroyEach();
    score=score+1;
  }
  
  drawSprites();
  text("score  "+ score,500,50);
}

//created a function for red ballon
function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.scale = 0.1;
  red.lifetime=200;
  redB.add(red);
}

function pinkBalloon() {
  //write code for pink
var  pink_balloon=createSprite(0,Math.round(random(20,390)),10,10);
    pink_balloon.addImage(pink_balloonImage);
    pink_balloon.scale=1;
  pink_balloon.velocityX=3;
  pink_balloon.lifetime=150;
  pinkB.add(pink_balloon);
}
function blueBalloon() {
  //write code for blue
var  blue_balloon=createSprite(0,Math.round(random(70,380)),10,10);
    blue_balloon.addImage(blue_balloonImage);
    blue_balloon.scale=0.1; 
    blue_balloon.velocityX=3;
    blue_balloon.lifetime=155;
  blueB.add(blue_balloon);
}

function greenBalloon() {
  //write code for green
  var green_balloon = createSprite(0,Math.round(random(50,300)),10,10);
  green_balloon.addImage(green_balloonImage);
  green_balloon.scale = 0.1;
  green_balloon.velocityX=3;
  green_balloon.lifetime=150;
  greenB.add(green_balloon);
}
function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
   
}