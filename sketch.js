const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var chromakey;
var engine, world;
var box1, pig1;
var stadium;
var mirinda,bisleri;
var gameState="PLAY"
var bgImage="bg.png";
var subscribers;
var birdtype;

function preload(){

  // chromakey=loadImage("bg.png");
     acommunity()

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

     subscribers = 0;
    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    birdtype=1;

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    
    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    

    stadium=new Ground(150,305,300,170);

    //bisleri=new Log(120,100,80,120);

    bird = new Bird(100,100);

    mirinda=new Catapult(bird.body,{x:200,y:100});


}

function draw(){
    if(bgImage)
    background(bgImage);

textSize(34);
   textFont("ALGERIAN");
   fill("yellow");
   text("Subscribers : "+subscribers,900,50)

    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    stadium.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();

    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();

    //bisleri.display();
    mirinda.display();

    if (bird.body.position.y>200&&bird.body.position.x<500){
        bird.body.position.y=150;
        
    }
}

function mouseDragged(){
    //if(gameState==="PLAY"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    //}
}

function mouseReleased(){
    mirinda.fly()
   // gameState="reel"
}

function keyPressed(){
    if(keyCode===32){
        if(birdtype<3){
            birdtype=birdtype+1
        }
        else{
            birdtype=1;
        }
        switch (birdtype){
            case 1 : bird.image=loadImage("ok1i.png")
            break
            case 2 : bird.image=loadImage("RG.png")
            break
            case 3 : bird.image=loadImage("kirti.png")
            break
        }
        Matter.Body.setPosition(bird.body,{x:120,y:120})
        mirinda.attach(bird.body)
        bird.rg=[]
    }
} 

async function acommunity(){
    var audience = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var audienceJSON = await audience.json()
    var datetime = audienceJSON.datetime;
    var hour    = datetime.slice(11,13)
    if(!(hour>=6&&hour<=20)){
        bgImage=loadImage("bg.png")
        }
        else {
         bgImage=loadImage("nightbg.PNG")
    }
}