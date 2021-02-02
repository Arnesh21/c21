var cat, cat1, cat2, cat3, mouse, mouseImg, mouse1, mouse2, mouse3;

var baground;

function preload() {
    baground = loadImage("images/garden.png");
    cat1 = loadAnimation("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png" , "images/cat3.png");
    cat3 = loadAnimation("images/cat4.png");

    mouse1 = loadAnimation("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png" , "images/mouse3.png");
    mouse3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(870,600,10,10)
    cat.addAnimation("cat1", cat1);
    cat.scale = 0.1;
    
    
    mouse = createSprite(200,600,10,10);
    mouse.addAnimation("mouse2", mouse1);
    mouse.scale = 0.08;

}

function draw() {

    background(baground);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
      mouse.changeAnimation("mouse", mouse3);
      cat.changeAnimation("cat", cat3) 
    }

    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("cat2", cat2);
        cat.changeAnimation("cat2");  
    

    }

  }
  