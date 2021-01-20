var sword,knife
var monster,monsterimage
var monstergroup
var fruitgroup
var pl=0
var apple
var banana
var pear
var orange
var edges
var play=1
var end=0
var gamestate=play
var score=0
var gameover
var knifesound
var reset
var restart,restartimage




function preload(){
  knife=loadImage("sword.png")
 apple=loadImage("fruit1.png")
  banana=loadImage("fruit2.png")
  pear=loadImage("fruit3.png")
  orange=loadImage("fruit4.png")
  monsterimage=loadImage("alien2.png")
 gameover = loadSound("gameover.mp3")
  knifesound = loadSound("knifeSwooshSound.mp3")
  restartimage = loadImage("restart-refresh-video-game-asset-menu-icon-button-vector-14954463.jpg")
  
 
}
function setup() {
  createCanvas(600,600);
  
  
  sword=createSprite(500,400,20,20)
  sword.addImage(knife)
  sword.scale=0.6
  edges= createEdgeSprites()
  fruitgroup = new Group()
 monstergroup = new Group()
  restart = createSprite(300,350,20,20)
  restart.addImage(restartimage)
  restart.visible=false
  restart.scale=0.05
  
}

function draw(){
background("#00ff08")
  if(gamestate===play){
    
 

fruits()
  monsters()
    textSize(25)
    fill("#00a2ff")
  text("your score="+score,400,30)

  sword.y=World.mouseY
sword.x=World.mouseX
    if(fruitgroup.isTouching(sword)){
      fruitgroup.destroyEach()
      score=score+1
      knifesound.play()
      
      
      
      
       
       
       
       
       }
    if(sword.isTouching(monstergroup)){
      gamestate=end
          gameover.play()
      monstergroup.destroyEach()
      
       
       
       
       
       
       
       }
  
  }
    
     
     
     
  else if(gamestate===end){
    textSize(30)
    fill("white")
    stroke("black")
    strokeWeight(3)
    text(" Oops gameover",200,260)
      text("Total score="+score,200,300)
    restart.visible=true
    sword.visible=false
    
          
          
          
          }
  if(mousePressedOver(restart)){
    reset()
    
     
     
     
     
     }

  drawSprites()
}
function fruits(){
 if (frameCount % 110 === 0){
   var fruit = createSprite(600,165,10,40);
   fruit.velocityX = random(-8,-16)
   fruit.y=Math.round(random(20,580))

   
    // //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: fruit.addImage(apple);
              break;
      case 2: fruit.addImage(banana);
              break;
      case 3: fruit.addImage(pear);
              break;
      case 4: fruit.addImage(orange);
              break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    fruit.scale = 0.2;
    fruit.lifetime = 500;
   
   //adding obstacles to the group
   fruitgroup.add(fruit);
 }  
  
  
  
  
  
}
function monsters() {
  //write code here to spawn the clouds
  if (frameCount % 110=== 0) {
     monster = createSprite(600,100,40,10);
    monster.y = Math.round(random(20,580));
    monster.addImage(monsterimage);
   monster.scale = 0.5;
    monster.velocityX = Math.round(random(-7,-10));
    
     //assign lifetime to the variable
    monster.lifetime = 500;
    
   
    
    //adding cloud to the group
   monstergroup.add(monster);
  }
  
}
function reset(){
  gamestate=play
  score=0
  restart.visible=false
  sword.visible=true
  
  
  
  
}

