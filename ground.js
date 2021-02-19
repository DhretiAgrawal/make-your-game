class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
        }
        //this.angle=angle;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
      //  Matter.Body.setAngle(this.body);
        World.add(world,this.body);
    }
    display(){
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}