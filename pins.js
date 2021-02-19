class Pin{
    constructor(x,y,width,height){
        var options = {
         restitution:0.8,
         density:0.6,
         friction:0.6,
         isStatic:true
        }
        this.body =Bodies.rectangle(x,y,5,90,options);
        this.width=width
        this.height=height;
        World.add(world,this.body);
        this.image =loadImage("images/pin1.png");

    
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
      
    }
}