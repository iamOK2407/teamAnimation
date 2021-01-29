class Pig extends BaseClass {
    constructor(x, y)
  {
    super(x,y,50,50);
    this.image=loadImage("enemy.png");
    this.mrIndia=255;
  }
  display(){
       //super.display(); 
       console.log(this.body.speed)
       if(this.body.speed<2.5){
         super.display();
       }
       else{
         World.remove(world,this.body)
         this.mrIndia=this.mrIndia-8;
         push();
         tint(255,this.mrIndia)
         image(this.image,this.body.position.x,this.body.position.y,50,50)
          pop();
       }
       
  }
    score(){
      if(this.mrIndia<0 && this.mrIndia>-1600){
       subscribers=subscribers+1
      }
    }
    }
    