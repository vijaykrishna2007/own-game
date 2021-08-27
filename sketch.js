var grass, homeimg1, homeimg2, homeimg3, homeimg4, homeimg5, homeimg6, treeimg, buildingimg, treearea, deadimg;
var gameState = 0;
var ntrees = 0, nbuildings = 0;
var points = 25, warming = 100;
var monkey , monkey_running, jungleimg, monkimg;
var banana ,bananaImage, obstacle, obstacleImage, invisground;
var FoodGroup, obstacleGroup, treesGroup;
var score = 0, score2 = 0;
var caricon, monkicon;
var obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, 
obj14, obj15, obj16, obj17, obj18, obj19, obj20, obj21, obj22, obj23, obj24, obj25;
var tree1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground;
var box1, box2, box3, box4, box5, box6,
box7, box8, box9, box10, box11, box12,
box13, box14, box15, box16, box17, box18,
box19, box20, box21, box22, box23, box24,
box25, box26, box27, box28, box29, box30;
var beam1;
var ball1, rope1;
var crane;

function preload() {
  grass = loadImage("images/Week-1-Background.png");
  homeimg1 = loadImage("images/office.png");
  homeimg2 = loadImage("images/bedroom.png");
  homeimg3 = loadImage("images/kitchen.png");
  homeimg4 = loadImage("images/garage.png");
  homeimg5 = loadImage("images/bathroom.png");
  homeimg6 = loadImage("images/livingroom.png");
  buildingimg = loadImage("images/buildingimg.png");
  treeimg = loadImage("images/treeimg.png");
  cari = loadImage("images/caricon.png");
  monki = loadImage("images/monkicon.png");
  bananaImage = loadImage("images/banana.png");
  obstaceImage = loadImage("images/obstacle.png");
  jungleimg = loadImage("images/jungle.png");
  monkimg = loadImage("images/monkey_6.png");
  backgroundImg = loadImage("images/bgsite.png");

  monkey_running = loadAnimation("images/monkey_0.png","images/monkey_1.png","images/monkey_2.png","images/monkey_3.png",
  "images/monkey_4.png","images/monkey_5.png","images/monkey_6.png","images/monkey_7.png","images/monkey_8.png");
}

function setup() {
  createCanvas(1800,800);

  caricon = createSprite(1750,50,80,80);
  caricon.addImage(cari);
  caricon.scale = 0.3;
  caricon.visible = false;

  monkeyicon = createSprite(1650,50,80,80);
  monkeyicon.addImage(monki);
  monkeyicon.scale = 0.3;
  monkeyicon.visible = false;
  
  mground = createSprite(900,150,1800,1800);
  mground.velocityX= -7;
  mground.x = mground.width/2;
  mground.addImage(jungleimg);
  mground.scale = 1.9;
  mground.visible = false;
  
  monkey = createSprite(200,300,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.3;
  monkey.visible = false;

  FoodGroup = new Group();
  obstaclesGroup = new Group();
  treesGroup = new Group();

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(900,800,1800,20);
  crane = new Ground(395,575,1,1)

  box1 = new box(600,790);
  box2 = new box(600,772);
  box3 = new box(600,754);
  box4 = new box(600,736);
  box5 = new box(600,718);
  box6 = new box(550,790);
  box7 = new box(550,772);
  box8 = new box(550,754);
  box9 = new box(550,736);
  box10 = new box(550,718);
  box11 = new box(650,790);
  box12 = new box(650,772);
  box13 = new box(650,754);
  box14 = new box(650,736);
  box15 = new box(650,718);
  box16 = new box(700,790);
  box17 = new box(700,772);
  box18 = new box(700,754);
  box19 = new box(700,736);
  box20 = new box(700,718);
  box21 = new box(750,790);
  box22 = new box(750,772);
  box23 = new box(750,754);
  box24 = new box(750,736);
  box25 = new box(750,718);
  box26 = new box(800,790);
  box27 = new box(800,772);
  box28 = new box(800,754);
  box29 = new box(800,736);
  box30 = new box(800,718);

  ball1 = new ball(395,300);
  rope1 = new rope(ball1.body,crane.body);
}


function draw() {
  Engine.update(engine)
  background(0, 196, 3); 

if (gameState === 0) {
  // statring greeting and info screen
  stroke(0);
  textSize(30);
  fill("blue");
  text("Welcome warrior! Let's stop global warming",600,100);
  text("Your goal is to plant trees and reduce global warming",550,200);
  text("You have 25 points,planting takes 1 point and demolishing buildings takes 5 points",350,300);
  text("Earn more points by playing these minigames",600,400);
  text("Press space to start",780,600);
  text("Click the mouse to plant the tree!", 680,500);

  if (keyCode === 32) {
    gameState = 1;
  }
}

if (gameState === 1) {
  // week 1 planting game
  background(grass);
  stroke(100);
  textSize(40);
  fill("blue");
  text("Points:-" + points,10, 40);
  text("Global Warming Level:-" + warming, 10, 80);
  text("Trees planted:- " + ntrees,40,750);
  text("Buildings built:-" + nbuildings,500,750);

  if (points > 0 && mouseWentDown("leftButton") && mouseY > 200 && mouseY < 600) {
    tree1 = createSprite(mouseX,mouseY,10,10);
    tree1.addImage(treeimg);
    tree1.scale = 0.2;
    points -= 1;
    warming -= 1;
    ntrees += 1;
    treesGroup.add(tree1);
  }else if (points === 0 && mouseWentDown("leftButton") && mouseY > 200 && mouseY < 600) {
    tree1 = createSprite(mouseX,mouseY,10,10);
    tree1.addImage(treeimg);
    tree1.scale = 0.2;
    tree1.addImage(buildingimg);
    warming += 5;
    nbuildings += 1;
    treesGroup.add(tree1);
  }  

  if (points === 0 && nbuildings >= 10) {
    stroke(100);
    textSize(40);
    fill("red");
    text("Please play minigames to earn more points",850,750)
  }

  caricon.visible = true;
  monkeyicon.visible = true;

  if (mousePressedOver(caricon)) {
    gameState = 2
    treesGroup.destroyEach();
  }
  
  if (mousePressedOver(monkeyicon)) {
    gameState = 4
    treesGroup.destroyEach();
  }

  if (keyCode === 48 && ntrees >= 26) {
    gameState = 6;
  }
}

if (gameState !== 1) {
  caricon.visible = false;
  monkeyicon.visible = false;
}

if (gameState === 2) {
  //wrecking ball game
  background(backgroundImg);

ground.display();
crane.display();

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
box26.display();
box27.display();
box28.display();
box29.display();
box30.display();

box1.score2();
box2.score2();
box3.score2();
box4.score2();
box5.score2();
box6.score2();
box7.score2();
box8.score2();
box9.score2();
box10.score2();
box11.score2();
box12.score2();
box13.score2();
box14.score2();
box15.score2();
box16.score2();
box17.score2();
box18.score2();
box19.score2();
box20.score2();
box21.score2();
box22.score2();
box23.score2();
box24.score2();
box25.score2();
box26.score2();
box27.score2();
box28.score2();
box29.score2();
box30.score2();

ball1.display();
rope1.display();

if (keyCode === 49) {
  points = points + score2
  gameState = 3
 }
} 

if (gameState === 3) {
  //car game end state
  stroke("black");
  textSize(20);
  fill("black");
  text("You Scored:"+ points, 550,400);
  if (keyCode === 32) {
    gameState = 1;
  }
}                

if (gameState === 4) {
  //monkey game
  background("lightblue");
  
  if (mground.x < 0) {
    mground.x = mground.width/2;
  }

  monkey.visible = true;
  monkey.debug = true;
  mground.visible = true;

  invisground = createSprite(900,700,1800,1);
  invisground.visible = false;

  if (keyDown("space") && monkey.y > 550 ) {
    monkey.velocityY = -18;
  }

  monkey.velocityY = monkey.velocityY + 0.8;

  monkey.collide(invisground);  

  spawnBananas();
  spawnObstacles();

  if(FoodGroup.isTouching(monkey)){ 
    FoodGroup.destroyEach();
    score = score + 1;
  }

  if(obstaclesGroup.isTouching(monkey)){
    mground.destroy();
    monkey.destroy();
    obstaclesGroup.destroyEach();
    FoodGroup.destroyEach();
    monkey.addAnimation(monkimg);
    points = points + score;
    gameState = 5;
}
}

if (gameState === 5) {
  //monkey game end state
  stroke("black");
  textSize(20);
  fill("black");
  text("You Scored:- "+ points, 500,400);
  if (keyCode === 49) {
    gameState = 1;
  }
}

//week 2 puzzle game

if (gameState === 6) {
  //secondry info screen on puzzle game
  
  treesGroup.destroyEach();

  obj1 = createSprite(300,500,130,120);
  obj1.visible = false;
  obj2 = createSprite(940,670,60,80);
  obj2.visible = false;
  obj3 = createSprite(635,355,120,120);
  obj3.visible = false;
  obj4 = createSprite(445,640,60,190);
  obj4.visible = false;
  obj5 = createSprite(930,250,25,25);
  obj5.visible = false;
  obj6 = createSprite(1085,490,80,160);
  obj6.visible = false;
  obj7 = createSprite(1642,490,80,160);
  obj7.visible = false;
  obj8 = createSprite(1350,150,300,200);
  obj8.visible = false;
  obj9 = createSprite(390,230,170,120);
  obj9.visible = false;
  obj10 = createSprite(390,560,180,300);
  obj10.visible = false;
  obj11 = createSprite(770,435,180,565);
  obj11.visible = false;
  obj12 = createSprite(1390,290,210,70);
  obj12.visible = false;
  obj13 = createSprite(1380,402,60,60);
  obj13.visible = false;
  obj14 = createSprite(210,170,50,50);
  obj14.visible = false;
  obj15 = createSprite(1562,630,30,60);
  obj15.visible = false;
  obj16 = createSprite(95,530,110,350);
  obj16.visible = false;
  obj17 = createSprite(1220,480,50,20);
  obj17.visible = false;
  obj18 = createSprite(808,300,305,60);
  obj18.visible = false;
  obj19 = createSprite(420,10,65,60);
  obj19.visible = false;
  obj20 = createSprite(1390,225,355,30);
  obj20.visible = false;
  obj21 = createSprite(570,425,80,80);
  obj21.visible = false;
  obj22 = createSprite(1345,435,250,250);
  obj22.visible = false;
  obj23 = createSprite(130,490,100,155);
  obj23.visible = false;
  obj24 = createSprite(1345,640,200,100);
  obj24.visible = false;
  obj25 = createSprite(630,420,70,90)
  obj25.visible = false;

  if (keyCode === 49) {
    gameState = 7;
  }
}

if (gameState === 7) {
  //scene 1 
  background(homeimg1);
  stroke(100);
  textSize(40);
  fill("blue");
  text("Global Warming Level:" + warming, 10, 80);

  if (mousePressedOver(obj1) && obj1.visible === false) {
    obj1.visible = true;
    warming = warming - 1;
  }
  if (mousePressedOver(obj2)  && obj2.visible === false) {
    obj2.visible = true;
    warming = warming - 1;
  }
  if (mousePressedOver(obj3)  && obj3.visible === false) {
    obj3.visible = true;
    warming = warming - 1;
  }
  if (mousePressedOver(obj4)  && obj4.visible === false) {
    obj4.visible = true;
    warming = warming - 1;
  }
  if (mousePressedOver(obj15)  && obj15.visible === false) {
    obj15.visible = true;
    warming = warming - 1;
  }

  if (keyCode === 50) {
    gameState = 8;
  }
}

if (gameState === 8) {
  //scene 2 
  background(homeimg2);
  stroke(100);
  textSize(40);
  fill("blue");
  text("Global Warming Level:" + warming, 10, 80);

  obj1.visible = false;
  obj2.visible = false;
  obj3.visible = false;
  obj4.visible = false;
  obj15.visible = false;

  if (mousePressedOver(obj5)  && obj5.visible === false) {
    obj5.visible = true;
    warming = warming - 1;
  }
  if (mousePressedOver(obj6)  && obj6.visible === false) {
    obj6.visible = true;
    warming = warming - 1;
  }
  if (mousePressedOver(obj7)  && obj7.visible === false) {
    obj7.visible = true;
    warming = warming - 1;
  }
  if (mousePressedOver(obj8)  && obj8.visible === false) {
    obj8.visible = true;
    warming = warming - 1;
  }

  if (keyCode === 51) {
    gameState = 9;
  }
}

if (gameState === 9) {
  //scene 3 
  background(homeimg3);
  stroke(100);
  textSize(40);
  fill("blue");
  text("Global Warming Level:" + warming, 10, 80);

  obj5.visible = false;
  obj6.visible = false;
  obj7.visible = false;
  obj8.visible = false;
  
  if (mousePressedOver(obj9)  && obj9.visible === false) {
    obj9.visible = true;
    warming = warming - 1;
  }
  if (mousePressedOver(obj10)  && obj10.visible === false) {
    obj10.visible = true;
    warming = warming - 1;
  }
  if (mousePressedOver(obj11)  && obj11.visible === false) {
    obj11.visible = true;
    warming = warming - 1;
  }
  if (mousePressedOver(obj12)  && obj12.visible === false) {
    obj12.visible = true;
    warming = warming - 1;
  }
  if (mousePressedOver(obj25)  && obj25.visible === false) {
    obj25.visible = true;
    warming = warming - 1;
  }

  if (keyCode === 52) {
    gameState = 10;
  }
}

if (gameState === 10) {
  //scene 4 
  background(homeimg4);
  stroke(100);
  textSize(40);
  fill("blue");
  text("Global Warming Level:" + warming, 10, 80);

  obj9.visible = false;
  obj10.visible = false;
  obj11.visible = false;
  obj12.visible = false;
  obj25.visible = false;

  if (mousePressedOver(obj13)  && obj13.visible === false) {
    obj13.visible = true;
    warming = warming - 1;
  }
  
  if (mousePressedOver(obj14) && obj14.visible === false) {
    obj14.visible = true;
    warming = warming - 1;
  }
  if (mousePressedOver(obj16)  && obj16.visible === false) {
    obj16.visible = true;
    warming = warming - 1;
  }

  if (keyCode === 53) {
    gameState = 11;
  }
}

if (gameState === 11) {
  //scene 5 
  background(homeimg5);
  stroke(100);
  textSize(40);
  fill("blue");
  text("Global Warming Level:" + warming, 10, 80);

  obj13.visible = false;
  obj14.visible = false;
  obj16.visible = false;

  if (mousePressedOver(obj17)  && obj17.visible === false) {
    obj17.visible = true;
    warming = warming - 1;
  }
  if (mousePressedOver(obj18)  && obj18.visible === false) {
    obj18.visible = true;
    warming = warming - 1;
  }
  if (mousePressedOver(obj19)  && obj19.visible === false) {
    obj19.visible = true;
    warming = warming - 1;
  }
  if (mousePressedOver(obj20)  && obj20.visible === false) {
    obj20.visible = true;
    warming = warming - 1;
  }

  if (keyCode === 54) {
    gameState = 12;
  }
}

if (gameState === 12) {
  //scene 6 
  background(homeimg6);
  stroke(100);
  textSize(40);
  fill("blue");
  text("Global Warming Level-" + warming, 10, 80);

  obj17.visible = false;
  obj18.visible = false;
  obj19.visible = false;
  obj20.visible = false;

  if (mousePressedOver(obj21)  && obj21.visible === false) {
    obj21.visible = true;
    warming = warming - 1;
  }
  if (mousePressedOver(obj22)  && obj22.visible === false) {
    obj22.visible = true;
    warming = warming - 1;
  }
  if (mousePressedOver(obj23)  && obj23.visible === false) {
    obj23.visible = true;
    warming = warming - 1;
  }
  if (mousePressedOver(obj24)  && obj24.visible === false) {
    obj24.visible = true;
    warming = warming - 1;
  }

  if (keyCode === 32) {
    gameState = 13;
  }
}

if (gameState === 13 && warming < 100) {
  //displaying win if glonal warming less than 100
  stroke(100);
  textSize(150);
  fill("Blue");
  text("You Win",630,400);
  if (keyCode === 114) {
    gameState = 0;
  }

  obj21.visible = false;
  obj22.visible = false;
  obj23.visible = false;
  obj24.visible = false;
}

if (gameState === 13 && warming >= 100) {
  //displaying lose if global warming more than 100
  stroke(100);
  textSize(150);
  fill("Black");
  text("Game Over",530,400);
  if (keyCode === 114) {
    gameState = 0;
  }

  obj21.visible = false;
  obj22.visible = false;
  obj23.visible = false;
  obj24.visible = false;
}

drawSprites();
}

function spawnBananas() {
  //to spawn in bananas at random y value
    if (frameCount % 80 === 0) {
      banana = createSprite(1800,0,40,10);
      banana.y = random(250,550);    
      banana.velocityX = -7;
      banana.debug = true;
      
      banana.lifetime = 300;
      
      banana.addImage(bananaImage);
      banana.scale=0.1;    
      
      FoodGroup.add(banana);
    }
  }
  
  function spawnObstacles() {
    
    if(frameCount % 200 === 0) {
      obstacle = createSprite(1800,600,10,40);
      obstacle.velocityX = -7;   
      obstacle.debug = true;
      
      obstacle.addImage(obstaceImage);
      obstacle.scale=0.3;
      
      obstacle.lifetime = 300;
      
      obstaclesGroup.add(obstacle);
    }
  }

  function keyPressed(){
    if(keyCode === 37){
         crane.body.position.x = crane.body.position.x - 5;
     }
     if(keyCode === 39){
         crane.body.position.x = crane.body.position.x + 5;
     }
     if(keyCode === 65){
         ball1.body.position.x = ball1.body.position.x - 5;
     }
     if(keyCode === 68){
         ball1.body.position.x = ball1.body.position.x + 5;
     }
     if(keyCode === 8){
         Matter.Body.setPosition(ball1.body,{x:crane.body.position.x, y:crane.body.position.y + 25});
         rope1.attach(ball1.body);
     }
     if(keyCode === 15){
        rope1.fly();
     }
 }