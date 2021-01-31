START = 1
PLAY = 2
FACTORY = 3
HOME = 4
END = 0

var bg, bg_img,bg2,bg2_img,bg3,bg3_img;
var bike, bike_img;

var house, house_img;

var man, man_wait, man_running;

var ib;

var boy, girl, boy_img, girl_img;

var women, women_running, women_wait;

var choose, choose_img;

var story, story_img;

var names, name_img;

var viresGroup, maskGroup,sanitizerGroup,machineGroup,heartGroup;

var gameState = START

var  jumpSound;

var gameover,restart,gameover_img,restart_img;

var flag=0;

var virus, virus_img, virus2_img, virus3_img;
var heart, h2, h3, heart_img, h2_img, h3_img,h4,h4_img,h5,h5_img,h6,h6_img;
var heartCount = 6,score = 0;
var pause, pause_img
var funny1, funny1_img;
var mask, mask_img,sanitizer,sanitizer_img;

var machine,m1,m2,m3,m4,m5,m6,m7;

function preload() {
  bg_img = loadImage("background/sunrise.jpg");
  bg2_img = loadImage("background/background2.png");
  bg3_img = loadImage("background/background4.jpg");
  man_wait = loadAnimation("wait.png");
  man_running = loadAnimation("run/run1.png", "run/run2.png", "run/run3.png", "run/run4.png", "run/run5.png", "run/run6.png", "run/run7.png",
"run/run8.png");
  house_img = loadImage("background/background3.png");
  bike_img = loadAnimation("bike/bike1.png", "bike/bike2.png", "bike/bike3.png", "bike/bike4.png", "bike/bike5.png", "bike/bike6.png",
    "bike/bike7.png", "bike/bike8.png", "bike/bike9.png", "bike/bike10.png");
  boy_img = loadImage("boy.png");
  girl_img = loadImage("girl.png");
  women_wait = loadAnimation("girl/wait.png");
  women_running = loadAnimation("girl/girl1.png", "girl/girl2.png", "girl/girl3.png", "girl/girl4.png", "girl/girl5.png", "girl/girl6.png",
"girl/girl7.png", "girl/girl8.png", 
"girl/girl9.png");
  choose_img = loadImage("choose.png");
  story_img = loadImage("storyline.png");
  name_img = loadImage("name.png");
  jumpSound = loadSound("sound/jumpsound.m4a");

  virus_img = loadImage("viress/covid-19.png");
  virus2_img = loadImage("viress/vires.png");
  virus3_img = loadImage("viress/vires2.png");
  heart_img = loadImage("heart.png");
  h2_img = loadImage("heart.png");
  h3_img = loadImage("heart.png");
  h4_img = loadImage("heart.png");
  h5_img = loadImage("heart.png");
  h6_img = loadImage("heart.png");
  pause_img = loadImage("pause.png");
  funny1_img = loadImage("funny/abayega .png");
  mask_img = loadImage("protect/mask.png");
  sanitizer_img = loadImage("protect/santizer.png");
  m1 = loadImage("machine/machine1.png");
  m2 = loadImage("machine/machine2.png");
  m3 = loadImage("machine/machine3.png");
  m4 = loadImage("machine/machine4.png");
  m5 = loadImage("machine/machine5.png");
  m6 = loadImage("machine/machine6.png");
  m7 = loadImage("machine/machine7.png");
  gameover_img = loadImage("gameover.png");
  restart_img = loadImage("restart.png");
}

function setup() {
  createCanvas(1300, 700);

  // background
  bg = createSprite(700, 300, 10, 10);
  bg.addImage("backgrounds", bg_img);
  bg.visible = false;
  bg.scale = 3.2
  bg2 = createSprite(1600,430,10,10);
  bg2.addImage("bg2",bg2_img);
  bg2.visible=false;
  bg2.scale=1;
  bg3 = createSprite(800,300,10,10);
  bg3.addImage("bg3",bg3_img);
  bg3.visible=false;
  bg3.scale=3
  // house
  house = createSprite(350, 500, 10, 10);
  house.addImage("h", house_img)
  house.visible = false;
  house.scale = 2.5
  house.lifetime = 2010
  // man
  man = createSprite(100, 600, 10, 10);
  man.addAnimation("wait", man_wait);
  man.visible = false
  man.addAnimation("run", man_running);
  // ib 
  ib = createSprite(700, 680, 1400, 5);
  ib.visible = false;
  ib.shapeColor = "red"
  // women
  women = createSprite(100, 615, 10, 10);
  women.addAnimation("wait2", women_wait);
  women.visible = false;
  women.addAnimation("run2", women_running);

  choose = createSprite(650, 250, 10, 10);
  choose.addImage("c", choose_img);
  choose.scale = 0.6

  story = createSprite(700, 500, 10, 10);
  story.addImage("storytime", story_img);
  story.scale = 0.7
  heart = createSprite(469, 34, 10, 10);
  heart.scale = 0.09;
  heart.visible = false;
  names = createSprite(650, 70, 10, 10);
  names.addImage("name", name_img);
  names.scale = 0.6
  gameover = createSprite(640,242,10,10);
  gameover.addImage("game",gameover_img);
  gameover.scale=0.5
  gameover.visible=false
  restart = createSprite(620,348,10,10);
  restart.addImage("restart",restart_img);
  restart.scale=0.5
  restart.visible=false


  funny1 = createSprite(1100, 500, 10, 10);
  funny1.addImage("f1", funny1_img);
  funny1.scale = 0.09
  swanpboy()
  swanpgirl()



  virusGroup = createGroup();
  machineGroup = createGroup();
  heartGroup = createGroup();
}

function draw() {

  background(0);
  drawSprites();
  textSize(20);
  fill("black");
  text("DISTANCE   :  " + score, 1000, 45);
  heart.addImage("h", heart_img);

  textSize(20);
  fill("black")
  text("   " + heartCount, 485, 36);
  text(mouseX + "," + mouseY, mouseX, mouseY)

  if (gameState === START) {

    if (mousePressedOver(boy)) {
      man.visible = true;
      bg.visible = true;
      house.visible = true;
      bg.velocityX = -6;
      boy.visible = false;
      girl.visible = false;
      choose.visible = false;
      story.visible = false;
      names.visible = false;
      h2.visible=true;
      h3.visible=true;
      h4.visible=true;
      h5.visible=true;
      h6.visible=true;
      heart.visible = true;
      funny1.visible = false;
      gameState = PLAY;
    }

    if (mousePressedOver(girl)) {
      women.visible = true;
      bg.visible = true;
      house.visible = true;
      h2.visible = true;
      h3.visible = true;
      h4.visible = true;
      h5.visible = true;
      h6.visible = true;
      bg.velocityX = -6;
      boy.visible = false;
      girl.visible = false;
      choose.visible = false;
      story.visible = false;
      names.visible = false;
      heart.visible = true;
      funny1.visible = false;
      gameState = PLAY;
    }

  }

  if (gameState === PLAY) {
    seanpbike();
    swapHeart()
    score = score + Math.round(getFrameRate()/60);
    if (keyDown("space")) {
      jumpSound.play();
      man.velocityY = -10
      women.velocityY = -10
    }
    man.velocityY += 0.5;
    women.velocityY += 0.5;

    swapvirus()
    if (keyDown(UP_ARROW)) {
      man.changeAnimation("run", man_running);
      women.changeAnimation("run2", women_running);
      house.velocityX = -3

    }

    for (var i = 0; i < virusGroup.length; i++) {
      if (virusGroup.get(i).isTouching(man) && virusGroup.isTouching(women) ) {
        virusGroup.get(i).destroy();
        heartCount -= 1;
        heartGroup.destroyEach();
       // flag=2;
      }
      
    }
  

  

    if(score > 1200){
       bg2.visible=true
       bg2.velocityX=-4
    }
    if(score > 1300){
       bg.visible=false;
       bg2.visible=false;
       bg3.visible=true;
       bg3.velocityX = -6;
       
       gameState = FACTORY;
    }


 }
if (heartCount === 0) {
    gameState = END;
  }

  if (gameState === END) {
   bg.velocityX=0
   bg2.velocityX=0
   bg3.velocityX=0
   man.changeAnimation("wait",man_wait);
   man.velocityY=0
   women.changeAnimation("wait2",women_wait);
   maskGroup.setVelocityXEach(0)
  sanitizerGroup.setVelocityXEach(0);
   virusGroup.setVelocityXEach(0)
   machineGroup.setVelocityXEach(0);  
   maskGroup.destroyEach();
   sanitizerGroup.destroyEach();
   virusGroup.destroyEach();
   machineGroup.destroyEach();   
   gameover.visible=true;
   restart.visible=true;
   man.destroy();

}

  if(gameState === FACTORY){
   textSize(20);
   fill("yellow");
   text("DISTANCE   :  " + score, 1000, 45);
   heart.addImage("h", heart_img);
    swanpmachine();
    swapmask();
    swapsanitizer();
    score = score + Math.round(getFrameRate()/60);
    if (keyDown("space")) {
      jumpSound.play();
      man.velocityY = -10
      women.velocityY = -10
    }
    man.velocityY += 0.5;
    women.velocityY += 0.5;

    swapvirus()
    if (keyDown(UP_ARROW)) {
      man.changeAnimation("run", man_running);
      women.changeAnimation("run2", women_running);
      house.velocityX = -3

    }

    for (var i = 0; i < virusGroup.length; i++) {
      if (virusGroup.get(i).isTouching(man) && virusGroup.isTouching(women)) {
        virusGroup.get(i).destroy();
       
      }
    }
    


     for(var m = 0; m<machineGroup.length; m++){
        if(machineGroup.get(m).isTouching(man) && machineGroup.isTouching(women)){
           machineGroup.get(m).destroy();
           heartCount -=1

        }
     }

   if (bg3.x < 0) {
      bg3.x = bg3.width / 2;
    }

  } 

 if (bg.x < 0) {
    bg.x = bg.width / 2;
  }

  man.collide(ib);
  women.collide(ib);

}

function swanpboy() {
  boy = createSprite(200, 200, 10, 10);
  boy.addImage("b", boy_img);
}

function seanpbike() {
  if (frameCount % 1300 === 0) {
    bike = createSprite(0, 450, 20, 20);
    bike.addAnimation("b", bike_img);
    bike.scale = 2
    bike.velocityX = 6
    bike.lifetime = 500;
  }
}

function swanpgirl() {
  girl = createSprite(1100, 200, 10, 10);
  girl.addImage("girl", girl_img);
  girl.scale = 0.5
}

function swapvirus() {
  if (frameCount % 200 === 0) {
    virus = createSprite(1300, 600, 10, 10);
    virus.y = Math.round(random(400,600));
    virus.velocityX = -(3+2*score/100);
    virus.scale = 0.2;
    var v = Math.round(random(1, 3))
    switch (v) {
      case 1: virus.addImage("b", virus_img);
        break;
      case 2 : virus.addImage("b2", virus2_img);
        break;
      case 3 : virus.addImage("b3", virus3_img);
        break;
      default:
        break;

    }
    virus.lifetime = 500;
    virusGroup.add(virus);
  }

}

function swanpmachine(){
   if(frameCount%290 ===0){
   machine = createSprite(1350,600,10,10);
   machine.y = Math.round(random(450,600));
   machine.velocityX = -(3+2*score/100);
   var m = Math.round(random(1,7));
   switch(m){
      case 1 : machine.addImage("m1_img",m1);
      break;
      case 2 : machine.addImage("m2_img",m2);
      break;
      case 3 : machine.addImage("m3_img",m3);
      break;
      case 4 : machine.addImage("m4_img",m4);
      break;
      case 5 : machine.addImage("m5_img",m5);
      break;
      case 6 : machine.addImage("m6_img",m6);
      break;
      case 7 : machine.addImage("m7_img",m7);
      break;
      default:
      break

   }
   machine.lifetime=500;
   machineGroup.add(machine);
}
} 

function swapHeart(){
    h2 = createSprite(517,34,10,10);
    h2.addImage("heart2",h2_img);
    h2.visible=false;
    h2.scale = 0.09;
    h3 = createSprite(565,34,10,10);
    h3.addImage("heart3",h3_img);
    h3.visible=false;
    h3.scale = 0.09;
    h4 = createSprite(613,34,10,10);
    h4.addImage("heart4",h4_img);
    h4.visible=false;
    h4.scale = 0.09;
    h5 = createSprite(661,34,10,10);
    h5.addImage("heart4",h4_img);
    h5.visible=false;
    h5.scale = 0.09;
    h6 = createSprite(709,34,10,10);
    h6.addImage("heart4",h4_img);
    h6.visible=false;
    h6.scale = 0.09;

    heartGroup.add(h2,h3,h4,h5,h6)
}



