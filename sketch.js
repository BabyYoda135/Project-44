var playerImg;
var ballImg;
var defenderImg;
var backgroundImg;
var defender, ball, player, goal;
var gameState = 0;

function preload(){
playerImg =  loadImage("boy.png")
ballImg = loadImage("ballImg.png")
defenderImg = loadImage("defenderImg.png")
backgroundImg = loadImage("Background.jpg")
} 

function setup() {
  createCanvas(1536, 730);
 player =  createSprite(1300, 350, 50, 50);
 ball = createSprite(775, 350, 20, 20)
 defender = createSprite(400, 300, 50, 50)
 goal = createSprite(100, 350, 60, 60)
 player.addImage("playerImg", playerImg)
 ball.addImage("ballImg", ballImg)
 defender.addImage("defenderImg", defenderImg)
 player.scale = 0.1
 ball.scale = 0.075
 defender.scale = 0.25
 createEdgeSprites()
}

function draw() {
  background(backgroundImg);  
  if(keyDown("RIGHT_ARROW")){
  player.x=player.x+10
  }
  if(keyDown("LEFT_ARROW")){
  player.x=player.x-10
  }
  if(keyDown("DOWN_ARROW")){
  player.y=player.y+15
  }
  if(keyDown("UP_ARROW")){
  player.y=player.y-15
  }
  if(gameState === 0){
  textSize(45)
  stroke(10)
  fill("red")
  text("Press Space To Start", 550, 365)
  player.visible = false
  ball.visible = false
  defender.visible = false
  }

  if(keyDown("space")){
    gameState = 1
  }

  if(gameState === 1){
  player.visible = true
  ball.visible = true
  defender.visible = true
  defender.velocityY = 8
  }
  
  
  console.log(gameState)
  drawSprites();
}