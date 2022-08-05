var bg,bgImage;
var player,playerImg;
var ground;
var policeOffier, policeOffierImg;

function preload(){
    bgImage = loadImage("assets/background.jpg");
    playerImg = loadImage("assets/pc.png");
    policeOffierImg = loadImage("assets/npc.png");
}



function setup(){
    createCanvas(1200,700);

    bg = createSprite(700,350);
    bg.addImage(bgImage);
    bg. scale = 2.5;

    player = createSprite(450,600);
    player.addImage(playerImg);
    player.scale = 0.3;

    ground = createSprite(500,650,1200,10)    
    ground.visible = false;

    policeOfficer = createSprite(150,550);
    policeOfficer.addImage(policeOffierImg);
    policeOfficer.scale = 0.45;
    policeOfficer.velocityX = 2;
}

function draw(){
    background(0);
    bg.velocityX = -3;

    
    if(bg.x < 450){
        bg.x = 600;
    }
    
    if(keyDown("UP_ARROW") && player.y >= 200){
        player.velocityY = -12;
    }
    player.velocityY = player.velocityY +0.8

    if(player.collide(policeOfficer)){
        player.velocityY = 0;
        player.visible = false;
        bg.velocityX = 0;
        policeOfficer.velocityX = 0;
        policeOfficer.visible = false;
    }

    player.collide(ground)

    drawSprites();
}


