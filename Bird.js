class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,100,100);
    this.image = loadImage("ok1i.png");
    this.smokeImage= loadImage("smoke.png");
    this.rg=[]
  }
  display(){
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.position.x>200 && this.body.velocity.x>10){
    var pos=[this.body.position.x,this.body.position.y]
    this.rg.push(pos)
    }
     for(var puff=0;puff<this.rg.length;puff=puff+1){
       image(this.smokeImage,this.rg[puff][0],this.rg[puff][1])
     
     }
  }
}